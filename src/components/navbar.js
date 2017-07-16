import React, { Component } from 'react';
import '../../style/components/navbar.scss';

import Waypoint from 'react-waypoint'

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

        this.renderNavList = this.renderNavList.bind(this);
        this.makeTransparent = this.makeTransparent.bind(this);
        this.makeSolid = this.makeSolid.bind(this);
    }

    renderNavList() {
        return this.state.navList.map((item) => {
            const href = "#" + item;
            const styles = this.state.active === item ? 'nav-item active' : 'nav-item';

            return (
                <li key={item} className={styles} onClick={() => { this.setState({ active: item }) }}>
                    <a href={href} className="nav-link">{item}</a>
                </li>
            )
        })
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
            <div className="container-fluid cmpnt-navbar">
                <Waypoint
                    onEnter={this.makeTransparent}
                    onLeave={this.makeSolid}
                />
                <div className={this.state.navStyle}>
                <nav className="navbar navbar-toggleable-sm fixed-top">
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="navbar">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbar">
                        <span className="navbar-brand">Canaan Seaton</span>
                        <ul className="nav navbar-nav ml-auto">
                            {this.renderNavList()}
                        </ul>
                    </div>
                </nav>
                </div>
            </div>
        );
    }

}