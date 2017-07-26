import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import '../../style/components/animated-detail.scss'

export default class AnimatedDetail extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            progress: 0
        }

        this.onEnter = this.onEnter.bind(this);
    }

    onEnter() {
        if (!this.state.loaded){
            const { progress } = this.props;
            let timeoutValue = 60;

            if (progress > 500)
                timeoutValue = 5
            else if (progress > 100)
                timeoutValue = 20

            this.loadTimer = setInterval(() => {
                if (this.state.progress < this.props.progress) {
                    this.setState({
                       progress: this.state.progress + 1 
                    });
                } else {
                    clearInterval(this.loadTimer);
                }
            }, timeoutValue);

            this.setState({
                loaded: true,
            })
        }
    }

    componentWillUnmount() {
        if (this.loadTimer) clearInterval(this.loadTimer);
    }

    render() {
        const icon = `fa fa-${this.props.icon}`;

        return (
            <div className="cmpnt-animated-detail">
                <Waypoint onEnter={this.onEnter} />
                <div className="detail-container">
                    <p className="detail-count">
                        <i className={icon}></i>  
                        <span className="detail-count-number"> {this.state.progress} </span> 
                    </p>
                    <p className="detail-caption">{this.props.caption}</p>
                </div>
            </div>
        );
    }
}