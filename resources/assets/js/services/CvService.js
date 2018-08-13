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
            method: 'POST',
        }).then(res => {
            console.log("cvservice "+Promise.resolve(res));
            return Promise.resolve(res);
        })

    }
    AjoutUserFormation(userformation){
        return this.Auth.fetch(`${this.domain}/AjoutFormationUser`, {
            method: 'POST',
            body: JSON.stringify(userformation)
        }).then(res => {
            return Promise.resolve(res.data);
        })
        
    }
    getAllFormationByCategories(idcategorie){
        console.log(idcategorie)
        return this.Auth.fetch(`${this.domain}/CategorieAllFormations?idcategorie=`+idcategorie, {
            method: 'POST',
            //data: JSON.stringify(idcategorie)
        }).then(res => {
            console.log("cvservicefor "+Promise.resolve(res));
            return Promise.resolve(res);
        })

    }
}