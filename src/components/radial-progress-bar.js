import React, { Component } from "react";
import Waypoint from "react-waypoint";

import "../../style/components/radial-progress-bar.scss";

export default class RadialProgressBar extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false,
            progress: 0
        };

        this.onEnterHandler = this.onEnterHandler.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.loadTimer);
    }

    onEnterHandler() {
        if (!this.loaded) {
            this.loadTimer = setInterval(() => {
                if (this.state.progress === this.props.progress) {
                    clearInterval(this.loadTimer);
                    this.setState({
                        loaded: true,
                        loadTimer: null
                    });
                } else {
                    const progress = this.state.progress + 1;
                    this.setState({ progress });
                }
            }, 12);
        } else {
            clearInterval(this.loadTimer);
        }
    }

    render() {
        const { options } = this.props;

        const base = {
            fill: "transparent",
            strokeWidth: `${options.stroke.width}px`,
            stroke: `${options.stroke.color.background}`,
            strokeLinecap: "round",
            r: options.radius,
            strokeDasharray: getStrokeArray(options.radius)
        };

        const progress = {
            fill: "transparent",
            strokeWidth: `${options.stroke.width}px`,
            stroke: `${options.stroke.color.progress}`,
            strokeLinecap: "round",
            r: options.radius,
            strokeDasharray: getStrokeArray(options.radius),
            strokeDashoffset: calcProgress(options.radius, this.state.progress),
            transition: "stroke-dash-offset 500ms ease-in"
        };

        return (
            <div className="cmpnt-r-progress-bar">
                <Waypoint onEnter={this.onEnterHandler} bottomOffset="-100px" />
                <svg
                    height={options.height}
                    width={options.width}
                    style={{ background: "transparent" }}
                >
                    <circle
                        cx={options.center.X}
                        cy={options.center.Y}
                        r={options.radius}
                        style={base}
                    />
                    <circle
                        cx={options.center.X}
                        cy={options.center.Y}
                        r={options.radius}
                        style={progress}
                    />
                    <text
                        x={options.text.X}
                        y={options.text.Y}
                        textAnchor="middle"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        fontSize={`${options.text.fontsize}px`}
                    >
                        <tspan x={options.text.X}>
                            {this.props.text}
                        </tspan>
                        <tspan
                            x={options.text.X}
                            dy={`${options.text.fontsize + 5}px`}
                        >{`${this.state.progress} %`}</tspan>
                    </text>
                </svg>
            </div>
        );
    }
}

function calcProgress(radius, progress) {
    return 2 * Math.PI * radius * (1 - progress * 0.01);
}

function getStrokeArray(radius) {
    let circumference = 2 * Math.PI * radius;
    return `${circumference} ${circumference}`;
}
