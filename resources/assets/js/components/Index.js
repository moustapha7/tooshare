import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Header from './Header';


class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email : '',
            password: '',
            password_confirmation: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({login: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post('/api/login', {
                email: this.state.login,
                password: this.state.password
            })
            .then(response => {
                console.log('from handle submit', response);
                this.setState({err: false});
                this.props.router.push("home") ;

            })
            .catch(error=> {
                console.log('from handle error', error);
                // if(error.code == 401){
                alert('Login ou Mot de passe incorrect');
                // }
                this.setState({login: ""});
                this.setState({password: ""});
                this.setState({err: true});
            });
    }

    render(){
        let error = this.state.err ;
        let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
            <div>
                <Header/>
                <div className="lheight"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12"></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <p class="h3 text-center mb-4 inscription">Inscription</p>
                                                <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                                    {error != undefined && <div className={name} role="alert">{msg}</div>}
                                                </div>
                                                <form className="form-horizontal" role="form" method="POST" >
                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="first_name" type="text" className="form-control" ref="first_name" name="first_name"  required autoFocus placeholder="Prenom"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="laste_name" type="text" className="form-control" ref="laste_name" name="laste_name"  required  placeholder="Nom"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="email" type="email" className="form-control" ref="email" name="email"  required  placeholder="Adresse Email"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="phone" type="phone" className="form-control" ref="phone" name="phone"  required  placeholder="Telephone"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="password" type="password" className="form-control"  ref="password" name="password" required placeholder="Mot de passe"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12">
                                                            <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation"  required placeholder="Confirmer Mot de passe"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-md-12 col-md-offset-4">
                                                            <button type="submit" className="btn btn-primary">
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