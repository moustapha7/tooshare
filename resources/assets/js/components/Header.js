import React, {Component} from 'react';
import { ReactDOM, Switch, render} from 'react-dom';
import { Router, Route, browserHistory, Link, withRouter } from 'react-router';
import logo from '../../../images/logo.png'
import AuthService from "../services/AuthService";
import SimpleReactValidator from 'simple-react-validator';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.Auth=new AuthService();
        this.validator = new SimpleReactValidator();
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePwrd = this.handleChangePwrd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   /* componentWillMount(){
        if(this.Auth.loggedIn()){
           // this.props.router.push("home");
        }
    }*/

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    handleChangePwrd(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if( this.validator.allValid() ){
           // alert('Email: ' + this.state.login+ ' Password: '+ this.state.password);
            this.Auth.login(this.state.login,this.state.password).then(res=>{
                const dataUser=res;
                this.props.router.push("home",dataUser);
               // alert(res);
                console.log(dataUser);

            }).catch(err=>{
                alert(err);
            })
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    handleLogout(e){
        e.preventDefault();
        this.Auth.logout();
        this.props.router.push("/");

    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push('/');
    }

    render(){
        if (this.props.link) {
            let error = this.state.err ;
            let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
            let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
            return (
                <div>
                <nav className="navbar mynavbar navbar-expand-lg navbar-dark bg-primar bg-tooshare fixed-top">
                    <div className="container">
                       <a className="navbar-brand hidden-md-down" href="#"> <img src={logo} alt="TOOSHARE LOGO" height="30" width="auto"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home"><i className="fa fa-home couleur"></i> <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/allUsers"><i className="font-bold fa fa-users"></i></Link>
                                </li>
                                <li className="nav-item cart-btn">
                                    <Link className="nav-link" to="/chat"><i className="font-bold fa fa-envelope"></i></Link>
                                    <span className="notifications-badge" color="danger" >+99</span>
                                </li>
                                <li className="nav-item cart-btn">
                                    <a className="nav-link" href="#"><i className="fa fa-folder-open"></i></a>
                                    <span className="notifications-badge" color="danger" >2</span>
                                </li>
                                <logo className="logo ">
                                    <Link className="logo navbar-brand"  to="/"><strong><img src={logo} height="30" width="auto"/> </strong></Link>
                                </logo>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-university"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-users"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa fa-briefcase"></i></a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Recherche"  aria-label="Search"/>
                            </form>
                            <ul className="user-profile navbar-nav ">
                            <li className="nav-item dropdown user-avatar">

                                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Mon Compte</a>
                                    <a className="dropdown-item" href="#">Paramettre</a>
                                    <div className="dropdown-divider">Autres</div>
                                    <a className="dropdown-item" href="#">Deconnexion</a>
                                </div>
                            </li>
                            </ul>
                            <button className="btn btn-danger" onClick={this.handleLogout.bind(this)}>Logout</button>
                        </div>
                    </div>
                </nav>
                <div className="headerspace"></div>
                </div>

            )
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primar bg-tooshare fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#"> <img src={logo} alt="TOOSHARE LOGO" height="30"
                                                                   width="auto"/></a>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="mycollapse mynavbar-collapse" id="navbarSupportedContent" align="right">
                            <div  align="right">
                                <form className="form-inline my-2 my-lg-0 loginForm pull-right" onSubmit={this.handleSubmit}>
                                    <div className="col-12 " align="right">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" value={this.state.login} onChange={this.handleChangeLogin} />
                                        {this.validator.message('login', this.state.login, 'required|email', 'text-danger')}

                                        <input className="form-control mr-sm-2" type="password" placeholder="Mot de Passe" aria-label="Mot de passe" value={this.state.password} onChange={this.handleChangePwrd}/>
                                        {this.validator.message('password', this.state.password, 'required|min:6', 'text-danger')}
                                        <button className="btn btn-default my-2 my-sm-0 btn-login" type="submit">Connexion</button>
                                    </div>
                                    <div align="right" className="mdpperdue col-12"><a href="#" className="mdperdu">Vous avez Perdu votre mot de Passe ?</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="headerspace"></div>
            </div>
        )
    }
}
export default withRouter(Header);