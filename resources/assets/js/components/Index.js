
import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './Header';
import SimpleReactValidator from 'simple-react-validator';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import AuthService from '../services/AuthService'
class Welcome extends Component {


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
         this.Auth=new AuthService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        if(this.Auth.loggedIn()){
            this.props.router.push("home");
        }
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

            this.Auth.Auth(user).then(response=>{
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

    render(){
        const { country, city } = this.state;
        let error = this.state.err ;
        let msg = (!error) ? 'Inscrie avec succes' : 'Oops! , Quelque chose s\'est mal passé' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
            <div>
                <Header/>
                <div className="lheight"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <Link to="/home"><i className="fa fa-home"></i>Acceuil /</Link>
                            <Link to="/chat"><i className="fa fa-chat"></i>Messages /</Link>
                            <Link to="/profil"><i className="fa fa-chat"></i>Profil</Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                            <p className="h3 text-center mb-4 inscription">Inscription</p>
                                                <div className="col-md-offset-2 col-md-12 col-md-offset-2">
                                                    {error != undefined && <div className={name} role="alert">{msg}</div>}
                                                </div>
                                                <form className="form-horizontal" role="form" method="POST" onSubmit={this.handleSubmit}>
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">

                                                                <input id="first_name" type="text" className="form-control" ref="first_name" name="first_name"  required autoFocus placeholder="Prenom" onChange={this.handleChange}/>
                                                            {this.validator.message('first_name', this.state.first_name, 'required|min:3', 'text-danger')}
                                                        </div>
                                                    </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">

                                                                    <input id="last_name" type="text" className="form-control" ref="last_name" name="last_name"  required  placeholder="Nom" onChange={this.handleChange}/>
                                                              <div> {this.validator.message('last_name', this.state.last_name, 'required|min:3', 'text-danger')}</div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <input id="email" type="text" className="form-control" ref="email" name="email" placeholder="Adresse Email" value={this.state.email} onChange={this.handleChange}/>
                                                            {this.validator.message('email', this.state.email, 'required|email', 'text-danger')}
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <input id="phone" type="phone" className="form-control" ref="phone" name="phone"  required  placeholder="Telephone" onChange={this.handleChange}/>
                                                            {this.validator.message('phone', this.state.phone, 'required|phone', 'text-danger')}
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">

                                                            <input id="birthday" type="date" className="form-control" ref="birthday" name="birthday"  required autoFocus placeholder="Date de naissence" onChange={this.handleChange}/>
                                                            {this.validator.message('birthday', this.state.birthday, 'required', 'text-danger')}
                                                        </div>
                                                        </div>

                                                        <div className="col-md-6"> <div className="form-group">

                                                            <select name="gender" id="gender" className="form-control" onChange={this.handleChange}>
                                                                <option value="female">female</option>
                                                                <option value="male">male</option>
                                                            </select>
                                                            {this.validator.message('gender', this.state.gender,'required|in:male,female', 'text-danger')}
                                                        </div></div>

                                                    </div>
                                                       <div className="row form-group">

                                                           <div className="col-md-6">
                                                               <CountryDropdown
                                                                   classes="form-control"
                                                                   value={country}
                                                                   onChange={(val) => this.selectCountry(val)} />
                                                               {this.validator.message('country', this.state.country,'required', 'text-danger')}
                                                           </div>
                                                           <div className="col-md-6">
                                                               <RegionDropdown
                                                                   classes="form-control"
                                                                   country={country}
                                                                   value={city}
                                                                   onChange={(val) => this.selectRegion(val)}  />
                                                               {this.validator.message('city', this.state.city,'required', 'text-danger')}
                                                           </div>
                                                       </div>

                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <input id="password" type="password" className="form-control"  ref="password" name="password" required placeholder="Mot de passe" onChange={this.handleChange}/>
                                                            {this.validator.message('password', this.state.password, 'required|min:6', 'text-danger')}
                                                        </div>
                                                    </div>



                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation"  required placeholder="Confirmer Mot de passe" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group" align="center">
                                                        <div className="col-md-12 col-md-offset-4">
                                                            <button type="submit" className="btn btn-primary" >
                                                                Inscription
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                    </div>
            </div>
        )
    }
}
export default Welcome;