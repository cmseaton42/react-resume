import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import '../../style/components/timeline-detail.scss'

export default class TimelineDetail extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            style: 'timeline-detail'
        }

        this.onEnterHandler = this.onEnterHandler.bind(this);
    }

    onEnterHandler() {
        if(!this.state.loaded) {
            this.setState({
                loaded: true,
                style: `timeline-detail animated ${this.props.animation}`
            });
        }
    }

    render() {
        
        return (
            <div className="cmpnt-timeline-detail">
                <Waypoint onEnter={this.onEnterHandler} bottomOffset='-50px' />
                <div className={this.state.style}>
                    <div className="timeline-header">
                        <p className="timeline-title">{this.props.title}</p>
                        <p className="timeline-time">
                            <i className="fa fa-calendar"></i>
                            <em> {this.props.timespan}</em>
                        </p>
                    </div>

                    <p className="timeline-description">
                    {this.props.description} 
                    </p>

                    <div className="timeline-decorator"></div>
                </div>
            </div>
        );
    }

}