import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Footer extends Component {
    render(){
        return (

            <div className="footer ">
                <footer className="page-footer bg-tooshare">
                    <div className="container-fluid pull-right">
                        Tooshare © 2018
                    </div>
                    <div className="footer-copyright">
                        <ul className="">
                            <li className="nav-item active "  ><a href="#" className="">A propos</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Conditions d'utilisation</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Confidentialité</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Cookies</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Marque</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Developpeur</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Université</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Professeur</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Entreprise</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Apprenant</a></li>
                            <li className="nav-item waves-light"  ><a href="#" className="">Carièrre</a></li>
                        </ul>
                    </div>

                </footer>
            </div>


        )
    }
}
export default Footer;