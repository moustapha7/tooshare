import decode from 'jwt-decode';
import AuthService from './AuthService';
export default class CvService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.Auth= new AuthService();
        this.getAllCategories = this.getAllCategories.bind(this)
      
    }
    getAllCategories(){
        return this.Auth.fetch(`${this.domain}/AllCategorie`, {
            method: 'GET',
        }).then(res => {
            return Promise.resolve(res);
        })

    }
    getAllFormationByCategories(idcategorie){
        return this.Auth.fetch(`${this.domain}/CategorieAllFormations`, {
            method: 'POST',
            body: JSON.stringify({
                idcategorie
            })
        }).then(res => {
            return Promise.resolve(res.data);
        })

    }
}