import decode from 'jwt-decode';
export default class UserService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.getUserinfo = this.getUserinfo.bind(this)
    }

    uploadImage(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/upload`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    deleteImage(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/DeleteImage`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    getUserAllUnreadNotifications(){
        return this.fetch(`${this.domain}/User/Notifications`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    markUserNotificationasRead(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/markUserNotificationasRead`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    getUserAllPosts(){
        return this.fetch(`${this.domain}/UserAllPosts`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    getUserAllFriends(){
        return this.fetch(`${this.domain}/UserAllFriends`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
}