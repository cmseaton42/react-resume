import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import Icon from './icon'

import '../../style/components/footer.scss'

export default class Footer extends Component {
    constructor() {
        super();

        this.state = {
            accounts: [
                { icon: 'github-alt', link: 'https://github.com/cmseaton42'},
                { icon: 'linkedin', link: 'https://www.linkedin.com/in/canaan-seaton-a53936109/'},
                { icon: 'facebook-square', link: 'https://www.facebook.com/canaan.seaton'},
                { icon: 'twitter', link: 'https://twitter.com/cmseaton42'},
                { icon: 'codepen', link: 'https://codepen.io/cmseaton42/'}
            ],
            loaded: false
        }

        this.renderIcons = this.renderIcons.bind(this);
    }

    renderIcons() {
        return this.state.accounts.map((account, index) => {
            return <Icon {...account} />
        });
    }


    render() {

        return (
            <div className="cmpnt-footer container">
                <div className="row align-items-center justify-content-center">
                        {this.renderIcons()}
                </div>
            </div>
        );
    }
}