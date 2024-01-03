import { urlBase, reposQuantity } from "../variables.js"

async function getRepos(user) {
    const response = await fetch(`${urlBase}/${user}/repos?per_page=${reposQuantity}`)
    return await response.json()
}

export { getRepos }