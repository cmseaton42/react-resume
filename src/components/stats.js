import React, { Component } from 'react'
import AnimatedDetail from './animated-detail'
import Waypoint from 'react-waypoint'

import '../../style/components/stats.scss'

export default class Stats extends Component {
    constructor() {
        super();

        this.state = {
            content: [
                { caption: "LeetCode Challenges Solved", icon: "code", progress: 36 },
                { caption: "Projects Completed", icon: "sitemap", progress: 17 },
                { caption: "Starbucks Consumed", icon: "coffee", progress: 531 }
            ],
            loaded: false,
            style: 'dnone'
        }

        this.onEnter = this.onEnter.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
    }

    onEnter() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                style: 'animated zoomIn'
            });
        }
    }

    renderDetails() {
        return this.state.content.map((detail, index) => {
            const { caption, icon, progress } = detail;
            return (
                <div key={caption} className={`col-sm-6 col-md-4 text-center ${this.state.style}`}>
                    <AnimatedDetail icon={icon} caption={caption} progress={progress} />
                </div>
            );
        });
    }

    render() {

        return (
            <div className="cmpnt-animated-detail">
                <Waypoint onEnter={this.onEnter} />
                <div className="row align-items-center justify-content-center">
                    {this.renderDetails()}
                </div>
            </div>
        );
    }
}