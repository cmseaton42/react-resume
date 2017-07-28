import React, { Component } from "react";
import "../../style/components/detail-w-icon.scss";

import Waypoint from "react-waypoint";

export default class DetailWIcon extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            style: "dnone"
        };

        this.onEnter = this.onEnter.bind(this);
    }

    onEnter() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                style: `animated ${this.props.animation}`
            });
        }
    }

    render() {
        const icon = `fa fa-${this.props.icon}`;

        return (
            <div className="cmpnt-detail-w-icon p-2">
                <Waypoint onEnter={this.onEnter} />
                <div className={this.state.style}>
                    <i className={icon} />
                    <p>
                        {this.props.caption}
                    </p>
                </div>
            </div>
        );
    }
}
