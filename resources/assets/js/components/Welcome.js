import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePwrd = this.handleChangePwrd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    handleChangePwrd(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
       // alert('Email: ' + this.state.login+ ' Password: '+ this.state.password);
        event.preventDefault();

        axios
            .post('/api/login', {
                email: this.state.login,
                password: this.state.password
            })
            .then(response => {
                //document.windows.href = "/home";
                console.log('from handle submit', response);
            });
    }

    render(){
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">TOOSHARE</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div  align="right">
                        <form className="form-inline my-2 my-lg-0 loginForm pull-right" onSubmit={this.handleSubmit}>
                            <div className="col-12 " align="right">
                            <input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" value={this.state.login} onChange={this.handleChangeLogin} />
                            <input className="form-control mr-sm-2" type="password" placeholder="Mote de Passe" aria-label="Mot de passe" value={this.state.password} onChange={this.handleChangePwrd}/>
                            <button className="btn btn-default my-2 my-sm-0 btn-login" type="submit">Connexion</button>
                            </div>
                            <div align="right" className="mdpperdue col-12"><a href="#" className="">Vous avez Perdu votre mot de Passe ?</a></div>
                        </form>
                        </div>
                    </div>
                </div>
            </nav>
                <div > </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-sm-9 col-xs-12">Bloc de Gauche
                            <Link to="/home">Acceuil</Link></div>
                        <div className="col-lg-3 col-sm-3 col-xs-12">Bloc du Form</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Welcome;