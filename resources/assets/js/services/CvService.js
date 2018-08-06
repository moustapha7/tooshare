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
    loadCommentsFromServer(){
        let $this=this;
        const config= {
            headers: {
                'Authorization': 'Bearer' + this.Auth.getToken()
            }
        }
        axios.get('/api/AllCategorie',config).then(response=>{
           /* $this.setState({
                data : response.data
            })*/
            console.log(response);
           // Promise.resolve(response.data);
           return response.data;
           
        }).catch(err=>{
            console.log(err);
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