import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class SideBarDroit extends Component {
    render() {
        const user=this.props.User
        return (
            <div className="card card-body bg-faded">
                SideBarDroit
            </div>
        );
    }
}