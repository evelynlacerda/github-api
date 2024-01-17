import { urlBase, eventsQuantity } from "../variables.js"

async function getEvents(user) {
    const response = await fetch(`${urlBase}/${user}/events?per_page=${eventsQuantity}`)
    return await response.json()
}

export { getEvents }