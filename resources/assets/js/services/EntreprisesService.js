import decode from 'jwt-decode';
import AuthService from './AuthService';


export default class EntreprisesService 
{
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api' // API server domain
        this.Auth= new AuthService();
        //this.getAllCategories = this.getAllCategories.bind(this)
      
    }

    ModifEntreprise(modifEntreprise){
       console.log( modifEntreprise);
        return this.Auth.fetch(`${this.domain}/modif`, {
            method: 'POST',
            body: JSON.stringify(modif)
        }).then(res => {
            return Promise.resolve(res.data);
        })
        
    }

    AddEntreprise(entrepriseDomaine){
       console.log( entrepriseDomaine);
        return this.Auth.fetch(`${this.domain}/add`, {
            method: 'POST',
            body: JSON.stringify(entrepriseDomaine)
        }).then(res => {
            return Promise.resolve(res.data);
        })
        
    }

    UpdateEntreprise(entrepriseDomaine){
       console.log( entrepriseDomaine);
        return this.Auth.fetch(`${this.domain}/update`, {
            method: 'POST',
            body: JSON.stringify(entrepriseDomaine)
        }).then(res => {
            return Promise.resolve(res.data);
        })
        
    }


 }   