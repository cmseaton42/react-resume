import React, { Component } from 'react';
import '../../style/components/navbar.scss';

import Waypoint from 'react-waypoint'
import Scrollspy from 'react-scrollspy'

export default class Navbar extends Component {

    constructor() {
        super();

        this.state = {
            navList: [
                'Home',
                'Profile',
                'Skills',
                'Experience',
                'Contact',
            ],
            active: 'Home',
            navStyle: 'navbar-tansparent'
        }

        this.makeTransparent = this.makeTransparent.bind(this);
        this.makeSolid = this.makeSolid.bind(this);
    }


    makeTransparent() {
        this.setState({
            navStyle: 'navbar-tansparent'
        })
    }

    makeSolid() {
        this.setState({
            navStyle: 'navbar-solid'
        })
    }

    render() {
        return (
            <div className="container-fluidcmpnt-navbar">
                <Waypoint
                    onEnter={this.makeTransparent}
                    onLeave={this.makeSolid}
                />
                <div className={this.state.navStyle}>
                <nav className="navbar navbar-toggleable-lg fixed-top">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="navbar">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbar">
                        <span className="navbar-brand">Canaan Seaton</span>
                        <Scrollspy className="nav navbar-nav ml-auto" offset={50} items={this.state.navList} currentClassName='nav-item active'>
                            <li className="nav-item"><a className="nav-link" href="#Home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Profile">Profile</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Experience">Experience</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
                        </Scrollspy>
                    </div>
                </nav>
                </div>
            </div>
        );
    }

}