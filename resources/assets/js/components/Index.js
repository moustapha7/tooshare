import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './Header';


class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email : '',
            password: '',
            password_confirmation: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        // alert('Prenom: ' + this.state.first_name+ ' Nom: '+ this.state.last_name);
        const user = {
            first_name : this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone

        };

        const config= {
            headers: {'No-Auth': 'True'}
        }
        axios
            .post('/api/register', user, config)
            .then(response => {
                console.log('from handle submit', response);
                this.setState({err: false});
                this.props.router.push("home") ;

            })
            .catch(error=> {
                console.log('from handle error', error);
                // if(error.code == 401){
                alert('Erreur lors de l\'inscription');
                // }
                this.setState({login: ""});
                this.setState({password: ""});
                this.setState({err: true});
            });

    }

    render(){
        let error = this.state.err ;
        let msg = (!error) ? 'Inscrie avec succes' : 'Oops! , Quelque chose s\'est mal passé' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
            <div>
                <Header/>
                <div className="lheight"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12"></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                            <p class="h3 text-center mb-4 inscription">Inscription</p>
                                                <div className="col-md-offset-2 col-md-12 col-md-offset-2">
                                                    {error != undefined && <div className={name} role="alert">{msg}</div>}
                                                </div>
                                                <form className="form-horizontal" role="form" method="POST" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="first_name" type="text" className="form-control" ref="first_name" name="first_name"  required autoFocus placeholder="Prenom" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="last_name" type="text" className="form-control" ref="last_name" name="last_name"  required  placeholder="Nom" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="email" type="email" className="form-control" ref="email" name="email"  required  placeholder="Adresse Email" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="phone" type="phone" className="form-control" ref="phone" name="phone"  required  placeholder="Telephone" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="password" type="password" className="form-control"  ref="password" name="password" required placeholder="Mot de passe" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation"  required placeholder="Confirmer Mot de passe" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group" align="center">
                                                        <div className="col-md-12 col-md-offset-4">
                                                            <button type="submit" className="btn btn-primary" >
                                                                Connexion
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