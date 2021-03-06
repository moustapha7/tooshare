import decode from 'jwt-decode';
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.state={
            data :[]
        }
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.getUserinfo = this.getUserinfo.bind(this)
        this.Auth=this.Auth.bind(this)

    }

    login(email, password) {
        // Get a token from api server using the fetch api
        console.log(email);
        return this.fetch(`${this.domain}/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => {
            this.setToken(res.access_token) // Setting the token in localStorage
           console.log(res);
            this.state.data=res;
            return Promise.resolve(res.data);

        })
    }

    Auth(user){
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/register`, {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(res => {
            if(res.access_token){
                this.setToken(res.access_token) // Setting the token in localStorage
                return Promise.resolve(res.data);
            }else {
                console.log(res);
                alert('errr')
            }

        })
    }
    getUserinfo(){
        return this.fetch(`${this.domain}/user`, {
            method: 'POST',
        }).then(res => {
            console.log("AuthServices: "+res.email)
            return Promise.resolve(res);
        })
    }

   /* async userInfo() {
        try {
            let response = await fetch(`${this.domain}/user`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer '+ this.getToken(),
                },
            });
            let responseJson = await response.json();
            if(responseJson !== null) {
                console.log('Got user info: ' + responseJson.id +responseJson.email +responseJson.phone );
                return responseJson
            }
        } catch (error) {
            console.log('Error in retrieving userinfo from Auth0: ' + error.message);
        }
    } */

    loggedIn(){
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken){
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken(){
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout(){
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile(){
        // Using jwt-decode npm package to decode the token
        return  Promise.resolve(this.state.data);
    }


    fetch(url, options){
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    fetchformdata(url, options){
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}