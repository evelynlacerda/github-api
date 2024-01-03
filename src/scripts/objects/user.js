const userData = {
    avatarURL: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfoUser(githubUser) {
        this.avatarURL = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
    },
    setReposUser(repositories) {
        this.repositories = repositories
    }
}

export { userData }