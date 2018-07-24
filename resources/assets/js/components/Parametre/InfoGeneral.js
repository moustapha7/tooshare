import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default class InfoGeneral extends Component {

    
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
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default"> 
                        <h1>  </h1>
                        <h1>Parameter</h1>
                                
                                <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="first_name">Prenom</label>
                                    <input type="text" class="form-control" id="first_Name" />
                                    </div>
                               
                                    <div class="form-group col-md-6">
                                    <label for="last_name">Nom</label>
                                    <input type="test" class="form-control" id="last_name" />
                                    </div>
                                </div>
                                    
                                
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="phone">Telephone</label>
                                    <input type="phone" class="form-control" id="phone" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" />
                                    </div>
                                    
                                
                                </div>

                            <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <label for="birthday">Date de Naissance</label>
                                                            <input id="birthday" type="date" className="form-control" ref="birthday" name="birthday"  required autoFocus placeholder="Date de naissence" onChange={this.handleChange}/>
                                                            {this.validator.message('birthday', this.state.birthday, 'required', 'text-danger')}
                                                        </div>
                                                        </div>

                                                        <div className="col-md-6"> <div className="form-group">
                                                        <label for="gender">Genre</label>
                                                            <select name="gender" id="gender" className="form-control" onChange={this.handleChange}>
                                                                <option value="female">female</option>
                                                                <option value="male">male</option>
                                                            </select>
                                                            {this.validator.message('gender', this.state.gender,'required|in:male,female', 'text-danger')}
                                                        </div></div>

                                                    </div>




                               
                                <div className="row form-group">

                                                           <div className="col-md-6">
                                                           <label for="country">Pays</label>
                                                               <CountryDropdown
                                                                   classes="form-control"
                                                                   value={country}
                                                                   onChange={(val) => this.selectCountry(val)} />
                                                               {this.validator.message('country', this.state.country,'required', 'text-danger')}
                                                           </div>
                                                           <div className="col-md-6">
                                                           <label for="city">Région</label>
                                                               <RegionDropdown
                                                                   classes="form-control"
                                                                   country={country}
                                                                   value={city}
                                                                   onChange={(val) => this.selectRegion(val)}  />
                                                               {this.validator.message('city', this.state.city,'required', 'text-danger')}
                                                           </div>
                                                       </div>
                                <div class="form-group">
                                    <label for="inputAddress">Addresse</label>
                                    <input type="text" class="form-control" id="inputAddress" />
                                </div>
                                
                                
                                
                                <button type="submit" class="btn btn-primary">Enregistrer</button>
                                </form>
        
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}





