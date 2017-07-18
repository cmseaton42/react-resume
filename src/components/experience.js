import React, { Component } from 'react'
import TimelineDetail from './timeline-detail'
import Waypoint from 'react-waypoint'


export default class Experience extends Component {
    constructor() {
        super();

        this.state = {
            workHistory: [
                {
                    title: 'Electrical Engineering Co-Op (Bridgestone Tire Company)',
                    timespan: 'May 2013 - December 2013',
                    description: `During My Coop, I successfully led two separate efforts to convert older GE Hardware to
                     ControlLogix Systems. This included updating the drawings and rewriting the software for both systems.`
                },
                {
                    title: 'Control Systems Engineer (Evana Automation)',
                    timespan: 'January, 2014 - May, 2016',
                    description: `During My Coop, I successfully led two separate efforts to convert older GE Hardware to
                     ControlLogix Systems. This included updating the drawings and rewriting the software for both systems`,
                },
                {
                    title: 'Control Systems Engineer (Preh IMA Automation)',
                    timespan: 'May, 2016 - Present',
                    description: `During My Coop, I successfully led two separate efforts to convert older GE Hardware to
                     ControlLogix Systems. This included updating the drawings and rewriting the software for both systems`,
                }
            ],
            education: [
                {
                    title: 'Tennessee Technological University - B.S. Electrical Engineering',
                    timespan: 'Fall 2009 - Fall 2013',
                    description: 'Emphasis: Control Systems Design and Telecommunication Systems',
                }
            ],
            exp_loaded: false,
            edu_loaded: false,
            exp_style: 'text-center',
            edu_style: 'text-center'
        }

        this.renderWorkHistory = this.renderWorkHistory.bind(this);
        this.renderEducation = this.renderEducation.bind(this);
        this.loadExpHandler = this.loadExpHandler.bind(this);
        this.loadEduhandler = this.loadEduhandler.bind(this);
    }

    renderWorkHistory() {
        return this.state.workHistory.map((event, index) => {
            return <TimelineDetail key={index} {...event} animation="flipInX" />;
        });
    }

    renderEducation() {
        return this.state.education.map((event, index) => {
            return <TimelineDetail key={index} {...event} animation="flipInX" />;
        });
    }

    loadExpHandler() {
        console.log('experience');
        if (!this.state.exp_loaded) {
            this.setState({
                exp_loaded: true,
                exp_style: 'text-center animated slideInLeft'
            });
        }
    }

    loadEduhandler() {
        if (!this.state.edu_loaded) {
            this.setState({
                edu_loaded: true,
                edu_style: 'text-center animated slideInRight'
            });
        }
    }

    render() {

        return (
            <div id="Experience" className="cmpnt-experience">
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div style={{fontSize: '50px'}} className={this.state.exp_style}><Waypoint onEnter={this.loadExpHandler} />Experience</div>
                            {this.renderWorkHistory()}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div style={{fontSize: '50px'}} className={this.state.edu_style}><Waypoint onEnter={this.loadEduhandler} />Education</div>
                            {this.renderEducation()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}