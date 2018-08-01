import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class PublicInfoGeneral extends Component {

    
    constructor(props) {

        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email : '',
            phone :'',
            password: '',
            gender:'',
            birthday :'',
            country:'',
            city:'',
            password_confirmation: '',
        }
        this.validator = new SimpleReactValidator();
        // this.Auth=new AuthService();
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    selectCountry (val) {
        this.setState({ country: val });
    }

    selectRegion (val) {
        this.setState({ city: val });
    }

    handleChange(event) {
       // this.setState({login: event.target.value});
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    render() {
        const { country, city } = this.state;
        return (
            <div className="espace">
                <div className="">
                    <div className="col-12">
                        <div className="panel panel-default"> 
                        <h1>  </h1>
                        <h2></h2>



<div class="card">
  <a class="btn btn-primary"> <h3 >Profil de Abdou AKIM AIDARA</h3></a>
    <div class="card-body">
   <div class="table-wrapper-scroll-y">

 <p>lorem20 </p>
</div>
    </div>
</div>






<div class="card">
  <a class="btn btn-primary"> <h3 >Civilité</h3></a>
    <div class="card-body">
   <div class="table-wrapper-scroll-y">

  <table class="table table-bordered table-striped">

    <tbody>
      <tr>
        <th scope="row">Nom :</th>
        <td>AIDARA</td>
      </tr>
      <tr>
        <th scope="row">Prénom :</th>
        <td>Abdou AKIM</td>
      </tr>
      <tr>
        <th scope="row">Date de Naissance :</th>
        <td>12 Avril 1996</td>
      </tr>
      <tr>
        <th scope="row">Lieu de Naissance :</th>
        <td>Mahmouda Cherif</td>
      </tr>
      <tr>
        <th scope="row">Adresse :</th>
        <td>Keur Massar</td>
      </tr>
      
      <tr>
        <th scope="row">Situation Matrimoniale :</th>
        <td>Célibataire avec 2 enfants</td>
      </tr>
      <tr>
        <th scope="row">Telephone :</th>
        <td>77 777 77 77</td>
      </tr>
      <tr>
        <th scope="row">Email :</th>
        <td>aaa@gmail.com</td>
      </tr>
    
    </tbody>
  </table>

</div>
    </div>
</div>



<div class="card">
  <a class="btn btn-primary"> <h3 >Formation</h3></a>
    <div class="card-body">
   <div class="table-wrapper-scroll-y">

  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">Année</th>
        <th scope="col">Libellé</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">2017</th>
        <td>Master 2 en Information</td>
        <td>Aplication Mobile ( Android, Ionic)</td>
       
      </tr>
      <tr>
        <th scope="row">2016</th>
        <td>Master 1 En Informatique</td>
        <td>Java JEE, JSP, JME</td>
      </tr>
      <tr>
        <th scope="row">2015</th>
        <td>Licence</td>
        <td>PHP, JSE</td>
      </tr>
      <tr>
        <th scope="row">2012</th>
        <td>Bac</td>
        <td>Série L2 Lycée Ahouane SANE de Bignona</td>
      </tr>
      <tr>
        <th scope="row">2009</th>
        <td>BFEM</td>
        <td>CEM Ahouane SANE de Bignona</td>
      </tr>
      <tr>
        <th scope="row">2005</th>
        <td>CEM 2</td>
        <td>Ecole Faye COLY</td>
      </tr>
    </tbody>
  </table>

</div>
    </div>
</div>



<div class="card">
  <a class="btn btn-primary"> <h3 >Certification</h3></a>
    <div class="card-body">
   <div class="table-wrapper-scroll-y">

  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">Année</th>
        <th scope="col">Libellé</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">2017</th>
        <td>Certification Android</td>
        <td>Certification du deuxime degrés en Aplication Mobile</td>
       
      </tr>
      <tr>
        <th scope="row">2016</th>
        <td>MCertification Java</td>
        <td>Certification en premier degre JEE, JSP, JME, Android</td>
      </tr>
      <tr>
        <th scope="row">2015</th>
        <td>Certification en PHP</td>
        <td>Certification en developement Web</td>
      </tr>
      
    </tbody>
  </table>

</div>
    </div>
</div>



<div class="card">
  <a class="btn btn-primary"> <h3 >Centre d'Interet</h3></a>
    <div class="card-body">
   <div class="table-wrapper-scroll-y">

  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">Année</th>
        <th scope="col">Libellé</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">2017</th>
        <td>Mouvement Syndical</td>
        <td>Vice Président de l'Amicale des Etudiants de NIIT</td>
       
      </tr>
      <tr>
        <th scope="row">2016</th>
        <td>Mouvement Associative</td>
        <td>President du Mouvement des jeunes de Mermoz</td>
      </tr>
      <tr>
        <th scope="row">2015</th>
        <td>Mouvement Associative</td>
        <td>Chargé de la Communication du Mouvement des jeunes de Mermoz</td>
      </tr>
     
    </tbody>
  </table>

</div>
    </div>
</div>
       
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}





