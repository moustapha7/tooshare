import AuthService from "./AuthService";
import * as React from "react";

export  default function WithAuth(AuthComponent) {
    const Auth=new AuthService();

    return class AuthWrapped extends React.Component{
            constructor(){
                super();
                this.state={
                    user:null
                }

            }

        componentWillMount(){
            if(!Auth.loggedIn()){
                this.props.router.push("/");
            }else{
                try {
                    const profile =Auth.getProfile();
                    this.setState({
                        user:profile
                    })
                }catch(err){
                    Auth.logout()
                    this.props.router.push("/");
                }
            }

        }
        render(){
            if(this.state.user){
                return(<AuthComponent {...this.props}{...this.state} />)
            }else{
                return null;
            }
        }
    }
    
}