import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import UserService from '../../services/UserService';
export default class InfoGeneral extends Component {

    
    constructor(props) {

        super(props);
        this.state = {
            user_id:'',
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
        this.Auth=new UserService();
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
    handleSubmit(event) {
        event.preventDefault();


        if( this.validator.allValid() ){
            const user = {
                first_name : this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                country:this.state.country,
                city:this.state.city,
                birthday:this.state.birthday,
                gender:this.state.gender,
            };

            this.Auth.modifparamGen(user).then(response=>{
                this.props.router.push("home",response);
            }).catch(err=>{
                alert(err);
            })



        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
        // alert('Prenom: ' + this.state.first_name+ ' Nom: '+ this.state.last_name);

    }


    render() {
        const userID = null;
        if(this.props.User){
            const user=this.props.User
           // this.state.setState({user_id:this.props.User.id})
            this.userID = this.props.User.id;
            console.log("oh",user)
        }
        const { country, city } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default"> 
                        <h1>  </h1>
                        <h1>Parameters</h1>
                                
                                <form className="form-horizontal" role="form" method="POST" onSubmit={this.handleSubmit}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="first_name">Prenom</label>
                                    <input type="text" class="form-control" id="first_Name" value={this.props.User.first_name} />
                                    </div>
                               
                                    <div class="form-group col-md-6">
                                    <label for="last_name">Nom</label>
                                    <input type="test" class="form-control" id="last_name" value={this.props.User.last_name}  />
                                    </div>
                                </div>
                                    
                                
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="phone">Telephone</label>
                                    <input type="phone" class="form-control" id="phone" value={this.props.User.phone} />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" value={this.props.User.email} />
                                    </div>
                                    
                                
                                </div>

                            <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                            <label for="birthday">Date de Naissance</label>
                                                            <input id="birthday" type="date" className="form-control" ref="birthday" name="birthday"  required autoFocus value={this.props.User.birthday} onChange={this.handleChange}/>
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
                                                                   defaultOptionLabel={this.props.User.country}
                                                                   value={country}
                                                                 
                                                                   onChange={(val) => this.selectCountry(val)} />
                                                               {this.validator.message('country', this.state.country,'required', 'text-danger')}
                                                           </div>
                                                           <div className="col-md-6">
                                                           <label for="city">Région</label>
                                                               <RegionDropdown
                                                                   classes="form-control"
                                                                   country={country}
                                                                   //value={city}
                                                                  value={this.props.User.city}
                                                                   onChange={(val) => this.selectRegion(val)}  />
                                                               {this.validator.message('city', this.state.city,'required', 'text-danger')}
                                                           </div>
                                                       </div>
                                <div class="form-group">
                                    <label for="inputAddress">Addresse</label>
                                    <input type="text" class="form-control" id="inputAddress" value={this.props.User.country}/>
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





