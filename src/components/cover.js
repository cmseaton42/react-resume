import React, { Component } from 'react'

import '../../style/components/cover.scss'

export default class Cover extends Component {
    constructor() {
        super();

        this.state = {
            details: [
                { detail: 'FRONT END DEVELOPER', style: 'animated fadeIn'},
                { detail: 'CONTROL SYSTEMS ENGINEER', style: 'dnone'},
                { detail: 'FREE-LANCE DEVELOPER', style: 'dnone'},
                { detail: 'SOFTWARE ENTHUSIAST', style: 'dnone'},
                { detail: 'SUPER NERD', style: 'dnone'}
            ],
            ptr: 0
        }

    }

    componentDidMount() {
        this.delay = setInterval(() => {
            let { ptr, details } = this.state;
            
            details[ptr].style = 'animated fadeOut';

            let timeout = setTimeout(() => {
                details[ptr].style = 'dnone';
                ptr = (ptr + 1) % this.state.details.length;
                details[ptr].style = 'animated fadeIn';

                this.setState({ ptr: ptr, details: details });
            }, 1000);

            this.setState({ details });
        }, 4000)
    }

    componentWillUnmount() {
        clearInterval(this.delay);
    }

    renderDetails() {
        return this.state.details.map((item, index) => {
            return (
                <p key={index} className={item.style}>{item.detail}</p>
            )
        });
    }

    render() {
        return (
            <div id="Home" className="cmpnt-cover p-relative">
                <div className="cover">
                    <div className="c-greeting-outer">
                        <div className="c-greeting-inner">
                            <h1 className="bold animated slideInDown">Hello, I'm Canaan</h1>
                            {this.renderDetails()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}