import decode from 'jwt-decode';
import AuthService from './AuthService';
export default class UserService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.Auth= new AuthService();
        this.modifparamGen = this.modifparamGen.bind(this)
      
    }
    modifparamGen(user){
        return this.Auth.fetch(`${this.domain}/modifparamgenUser`, {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(res => {
            return Promise.resolve(res.data);
        })
        
    }

    uploadImage(data) {
        // Get a token from api server using the fetch api
        return this.Auth.fetch(`${this.domain}/upload`, {
            method: 'POST',
            body:JSON.stringify(data)
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    deleteImage(data) {
        // Get a token from api server using the fetch api
        return this.Auth.fetch(`${this.domain}/DeleteImage`, {
            method: 'POST',
            body:JSON.stringify(data)
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    getUserAllUnreadNotifications(){
        return this.Auth.fetch(`${this.domain}/User/Notifications`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    markUserNotificationasRead(data) {
        // Get a token from api server using the fetch api
        return this.Auth.fetch(`${this.domain}/markUserNotificationasRead`, {
            method: 'POST',
            body:JSON.stringify(data)
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }
    getUserAllPosts(){
        return this.Auth.fetch(`${this.domain}/UserAllPosts`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    getUserAllFriends(){
        return this.Auth.fetch(`${this.domain}/UserAllFriends`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }

    getUserAllUsers(){
        return this.Auth.fetch(`${this.domain}/users`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    
}