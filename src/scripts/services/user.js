import { urlBase } from '../variables.js'

async function getUser(user) {
    const response = await fetch(`${urlBase}/${user}`)
    return await response.json()
}

export { getUser }