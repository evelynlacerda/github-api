const screenResult = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarURL}" alt="${user.login}">
                            <div class="data">
                                <h1>${user.name ?? 'Sem nome cadastrado 😢'}</h1>
                                <p>${user.bio ?? 'Sem bio cadastrada 😢'}</p>
                                <div class="follow">
                                    <p>👥</p>
                                    <p><span>Seguidores:</span> ${user.followers}</p>
                                    <p><span>Seguindo:</span> ${user.following}</p>
                                </div>
                            </div>
                        </div>`

        let reposIems = ''
        user.repositories.forEach(repo => reposIems += `<li>
                                                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                            <div class="repos-info">
                                                                <p>🍴 ${repo.forks}</p>
                                                                <p>⭐ ${repo.stargazers_count}</p>
                                                                <p>👀 ${repo.watchers}</p>
                                                                <p>💻 ${repo.language}</p>
                                                            </div>
                                                        </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${reposIems}</ul>
                                            </div>`
        }

        let eventsItems = ''
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItems += `<li>
                                    <a href="${event.repo.url}" target="_blank"><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</a>
                                </li>`
            } else if (event.type === 'CreateEvent') {
                eventsItems += `<li>
                                    <a href="${event.repo.url}" target="_blank"><span>${event.repo.name}</span> - Nenhum evento criado.</a>
                                </li>`
            }
        })
        
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItems}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screenResult }