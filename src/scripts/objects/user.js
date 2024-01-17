const userData = {
    avatarURL: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfoUser(githubUser) {
        this.avatarURL = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
        this.followers = githubUser.followers
        this.following = githubUser.following
    },
    setReposUser(repositories) {
        this.repositories = repositories
    },
    setEventsUser(events) {
        this.events = events
    }
}

export { userData }