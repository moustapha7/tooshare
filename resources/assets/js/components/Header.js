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
    componentWillMount(){
        if(this.Auth.loggedIn()){
            this.props.router.push("home");
        }
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    handleChangePwrd(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if( this.validator.allValid() ){
            alert('Email: ' + this.state.login+ ' Password: '+ this.state.password);
            this.Auth.login(this.state.login,this.state.password).then(res=>{
                this.props.router.push("home",res);

            }).catch(err=>{
                alert("login ou password incorect :)");
            })
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }


       /* axios
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
            });*/
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

                <nav className="navbar navbar-expand-lg navbar-dark bg-primar bg-tooshare">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="home"><i className="fas fa-home"></i> <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-stroopwafel"></i></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <button className="btn btn-danger" onClick={this.handleLogout.bind(this)}>Logout</button>
                        </div>
                    </div>
                </nav>

            )
        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primar bg-tooshare">
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

                                        <input className="form-control mr-sm-2" type="password" placeholder="Mote de Passe" aria-label="Mot de passe" value={this.state.password} onChange={this.handleChangePwrd}/>
                                        {this.validator.message('password', this.state.password, 'required|min:6', 'text-danger')}
                                        <button className="btn btn-default my-2 my-sm-0 btn-login" type="submit">Connexion</button>
                                    </div>
                                    <div align="right" className="mdpperdue col-12"><a href="#" className="mdperdu">Vous avez Perdu votre mot de Passe ?</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
export default withRouter(Header);