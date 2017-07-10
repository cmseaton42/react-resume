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
            const styles = this.state.active === item ? 'nav-item active' : 'nav-item';

            return (
                <li key={item} className={styles} onClick={() => { this.setState({ active: item }) }}>
                    <a href={href} className="nav-link">{item}</a>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid cmpnt-navbar">
                <nav className="navbar navbar-toggleable-sm sticky-top">
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
        );
    }

}