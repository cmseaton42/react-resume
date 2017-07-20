import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

export default class RadialProgressBar extends Component {
    constructor() {
        super();

        this.state = {
            loaded: true,
            progress: 0,
            loadTimer: null
        }

        this.onEnterHandler = this.onEnterHandler.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.state.loadTimer);
    }

    onEnterHandler() {
        if (!this.loaded) {
            let loadTimer = setInterval(() => {
                if (this.state.progress === this.props.progress) {
                    clearInterval(this.state.loadTimer);
                    this.setState({
                        loaded: true
                    });
                } else {
                    const progress = this.state.progress + 1;
                    this.setState({ progress });
                }
            }, 22);
            this.setState({ loadTimer });
        }
    }

    render() {
        const { options } = this.props;

        const base = {
            transformOrigin: '50% 50%',
            transform: 'rotateZ(-90deg)',
            fill: 'transparent',
            strokeWidth: `${options.stroke.width}px`,
            stroke: `${options.stroke.color.background}`,
            strokeLinecap: 'round',
            r: options.radius,
            strokeDasharray: getStrokeArray(options.radius),
        }

        const progress = {
            transformOrigin: '50% 50%',
            transform: 'rotateZ(-90deg)',
            fill: 'transparent',
            strokeWidth: `${options.stroke.width}px`,
            stroke: `${options.stroke.color.progress}`,
            strokeLinecap: 'round',
            r: options.radius,
            strokeDasharray: getStrokeArray(options.radius),
            strokeDashoffset: calcProgress(options.radius, this.state.progress)
        }

        return (
            <div className="cmpnt-r-progress-bar">
                <Waypoint onEnter={this.onEnterHandler} bottomOffset='-100px' />
                <svg height={options.height} width={options.width} style={{ background: 'transparent' }}>
                    <circle cx={options.center.X} cy={options.center.Y}
                        r={options.radius} style={base} />
                    <circle cx={options.center.X} cy={options.center.Y}
                        r={options.radius} style={progress} />
                    <text x={options.text.X} y={options.text.Y} textAnchor="middle"
                        fontWeight="bold" fontFamily="sans-serif"
                        fontSize={`${options.text.fontsize}px`}>
                        <tspan x={options.text.X} >{this.props.text}</tspan>
                        <tspan x={options.text.X} dy={`${options.text.fontsize + 5}px`}>{`${this.state.progress} %`}</tspan>
                    </text>
                </svg>
            </div>
        );
    }
};

function calcProgress(radius, progress) {
    return 2 * Math.PI * radius * (1 - progress * .01);
}

function getStrokeArray(radius) {
    let circumference = 2 * Math.PI * radius;
    return `${circumference} ${circumference}`;
}