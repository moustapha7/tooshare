import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class SideBarDroit extends Component {
    render() {
        return (
            <div className="card card-body bg-faded">
                <p> {this.props.user.first_name}</p>
                SideBarDroit
            </div>
        );
    }
}