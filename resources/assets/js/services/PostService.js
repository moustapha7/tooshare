import decode from 'jwt-decode';
export default class PostService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.getUserinfo = this.getUserinfo.bind(this)
    }

    LikePost(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/likedPost`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }

    CommentedPost(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/CommentedPost`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }

    SavePost(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/savePost`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }

    SharePost(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/sharePost`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }

    ReportedPost(data) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/reportedPost`, {
            method: 'POST',
            body:data
        }).then(res => {
            return Promise.resolve(res.data);
        })
    }

    
}