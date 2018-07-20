import decode from 'jwt-decode';
export default class FriendService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.getUserinfo = this.getUserinfo.bind(this)
    }

    DemandeFriend(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/DemandeFriend`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    DemandeTraited(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/DemandeTraited`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    Follow(){
        return this.fetch(`${this.domain}/follow`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    DeleteFriendSheap(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/DeleteFriendSheap`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
}