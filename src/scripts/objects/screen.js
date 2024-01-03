const screenResult = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarURL}" alt="${user.userName}">
                            <div class="data">
                                <h1>${user.name ?? 'Sem nome cadastrado 😢'}</h1>
                                <p>${user.bio ?? 'Sem bio cadastrada 😢'}</p>
                            </div>
                        </div>`

        let reposIems = ''
        user.repositories.forEach(repo => reposIems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${reposIems}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screenResult }