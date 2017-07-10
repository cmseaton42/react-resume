import React, { Component } from 'react';
import '../../style/components/navbar.scss';

export default class Navbar extends Component {

    constructor() {
        super();

        this.state = {
            navList: [
                'Home',
                'Skills',
                'Experience',
                'Testemonials',
                'Contact',
            ],
            active: 'Home'
        }

        this.renderNavList = this.renderNavList.bind(this);
    }

    renderNavList() {
        return this.state.navList.map((item) => {
            const href = "#" + item;

            if (item === this.state.active) {
                return (
                    <li key={item} className="nav-item active" onClick={() => { this.setState({ active: item }) }}>
                        <a href={href} className="nav-link">{item}</a>
                    </li>
                )
            }
            
            return (
                <li key={item} className="nav-item" onClick={() => { this.setState({ active: item }) }}>
                    <a href={href} className="nav-link">{item}</a>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid cmpnt-navbar">
                <nav className="navbar navbar-toggleable-md sticky-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <span className="navbar-brand">Canaan Seaton</span>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {this.renderNavList()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}