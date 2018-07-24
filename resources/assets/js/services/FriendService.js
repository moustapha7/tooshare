import decode from 'jwt-decode';
import AuthService from './AuthService';
export default class FriendService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.Auth= new AuthService();
    }

    DemandeFriend(data) {
        // Get a token from api server using the fetch api
        return this.Auth.fetchformdata(`${this.domain}/DemandeFriend`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    DemandeTraited(data) {
        // Get a token from api server using the fetch api
        return this.Auth.fetchformdata(`${this.domain}/DemandeTraited`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res);
        })
    }
    Follow(){
        return this.Auth.fetch(`${this.domain}/follow`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    DeleteFriendSheap(data) {
        // Get a token from api server using the fetch api
        return this.Auth.fetch(`${this.domain}/DeleteFriendSheap`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
}