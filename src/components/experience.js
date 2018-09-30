import React, { Component } from "react";
import TimelineDetail from "./timeline-detail";
import Waypoint from "react-waypoint";

import "../../style/components/experience.scss";

export default class Experience extends Component {
    constructor() {
        super();

        this.state = {
            workHistory: [
                {
                    title: "Control Systems Engineer (Bastian Solutions)",
                    timespan: "January 22, 2018 - Present",
                    description: `At Bastian, I am a member of a team that handles projects that are out of our company’s normal scope.  This means that the challenges we face daily are often brand new to Bastian and thus we rarely have anything to work from but rather lean on one another as a team address the problem head on.  In my time here, we have worked on everything from large scale system design to smaller R&D projects for some of the most forward-thinking companies in existence.`
                },
                {
                    title: "Control Systems Engineer (Preh IMA Automation)",
                    timespan: "May, 2016 - January 19, 2018",
                    description: `As a senior level Control Systems Engineer, I lead projects from the ground up. This spans from early customer
                    interaction all the way to final install.  I have led prelimary controls design efforts, designed software from the ground up, 
                    and and managed customer installs on a number of machines in this capacity. `
                },
                {
                    title: "Control Systems Engineer (Evana Automation)",
                    timespan: "January, 2014 - May, 2016",
                    description: `Beginning as an aide to large projects, I quickly gained merit in my colleagues eyes by developing
                    various tools to shorten the amount of time spent on overhead in addition to developing prepackaged code to lessen
                    the pain of device integration. From this, I was able to begin leading smaller projects early on in my tenure 
                    including several small to medium projects in the US and one abroad.`
                },
                {
                    title: "Electrical Engineering Co-Op (Bridgestone Tire Company)",
                    timespan: "May 2013 - December 2013",
                    description: `During My Coop, I successfully led two separate efforts to convert older GE Hardware to
                     ControlLogix Systems. This included updating the drawings and rewriting the software for both systems.`
                }
            ],
            education: [
                {
                    title: "Tennessee Technological University - B.S. Electrical Engineering",
                    timespan: "Fall 2009 - Fall 2013",
                    description: "Emphasis: Control Systems Design and Telecommunication Systems"
                }
            ],
            exp_loaded: false,
            edu_loaded: false,
            exp_style: "text-center dnone",
            edu_style: "text-center dnone"
        };

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
        if (!this.state.exp_loaded) {
            this.setState({
                exp_loaded: true,
                exp_style: "text-center animated slideInLeft"
            });
        }
    }

    loadEduhandler() {
        if (!this.state.edu_loaded) {
            this.setState({
                edu_loaded: true,
                edu_style: "text-center animated slideInRight"
            });
        }
    }

    render() {
        return (
            <div id="Experience" className="cmpnt-experience">
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="text-center">
                                <div className={`header experience-header ${this.state.exp_style}`}>
                                    <Waypoint onEnter={this.loadExpHandler} />
                                    Experience
                                </div>
                            </div>
                            {this.renderWorkHistory()}
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="text-center">
                                <div className={`header education-header ${this.state.edu_style}`}>
                                    <Waypoint onEnter={this.loadEduhandler} />
                                    Education
                                </div>
                            </div>
                            {this.renderEducation()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
