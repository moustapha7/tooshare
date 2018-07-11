import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Home extends Component {
    render(){
        return (
            <div className="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><i class="fas fa-home"></i> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i class="fas fa-stroopwafel"></i></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
                <div > </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-xs-12">Bloc de Gauche</div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">Bloc du milieu</div>
                        <div className="col-lg-3 col-sm-3 col-xs-12">Bloc de Droite</div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Home;