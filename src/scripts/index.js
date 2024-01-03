import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js"
import { userData } from "./objects/user.js"
import { screenResult } from "./objects/screen.js"

async function getProfileUser(username) {
    const responseUser = await getUser(username)

    if (responseUser.message === 'Not Found') return screenResult.renderNotFound()

    const responseRepos = await getRepos(username)

    userData.setInfoUser(responseUser)
    userData.setReposUser(responseRepos)
    
    screenResult.renderUser(userData)
}

function validateInputSearch(username) {
    if (username.length === 0) {
        alert('Digite um nome de usuário válido.')
        return true
    }
}

document.getElementById('btn-search').addEventListener('click', () => {
    let userSearch = document.querySelector('#input-search').value

    if (validateInputSearch(userSearch)) return
    getProfileUser(userSearch)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const username = e.target.value
    const keyCap = e.which || e.keyCode

    if (keyCap === 13) {
        if (validateInputSearch(username)) return
        getProfileUser(username)
    }
})