import React, { Component } from "react";
import RadialProgressBar from "./radial-progress-bar";
import Waypoint from "react-waypoint";
import FlipMove from "react-flip-move";
import MediaQuery from "react-responsive";

import "../../style/components/skills.scss";

export default class SkillDetail extends Component {
    constructor() {
        super();

        this.state = {
            skills: [
                { title: "HTML5", level: 85, category: { "Front End": true } },
                { title: "CSS3 / SASS", level: 85, category: { "Front End": true } },
                { title: "React", level: 90, category: { "Front End": true } },
                { title: "Handlebars", level: 55, category: { "Front End": true } },
                { title: "Redux", level: 55, category: { "Front End": true } },
                { title: "JS / ES6", level: 97, category: { "Front End": true, "Back End": true } },
                { title: "JQuery", level: 65, category: { "Front End": true } },
                { title: "Bootstrap", level: 75, category: { "Front End": true } },
                { title: "Git", level: 75, category: { "Front End": true, "Back End": true } },
                { title: "Jest", level: 80, category: { "Front End": true, "Back End": true } },
                { title: "MongoDB", level: 75, category: { "Back End": true } },
                {
                    title: "SQL",
                    level: 50,
                    category: { "Back End": true, "Control Systems": true }
                },
                { title: "NodeJS", level: 95, category: { "Back End": true } },
                { title: "Express", level: 85, category: { "Back End": true } },
                {
                    title: "Python",
                    level: 90,
                    category: { "Back End": true, "Control Systems": true }
                },
                {
                    title: "VB.Net",
                    level: 45,
                    category: { "Back End": true, "Control Systems": true }
                },
                { title: "C++", level: 50, category: { "Back End": true } },
                {
                    title: "Webpack",
                    level: 65,
                    category: { "Front End": true, "Back End": true }
                },
                { title: "Studio5000", level: 95, category: { "Control Systems": true } },
                { title: "FactoryTalk", level: 95, category: { "Control Systems": true } },
                { title: "GX Works 2", level: 80, category: { "Control Systems": true } },
                { title: "Proface", level: 85, category: { "Control Systems": true } },
                { title: "Cognex", level: 95, category: { "Control Systems": true } },
                { title: "Keyence", level: 80, category: { "Control Systems": true } },
                { title: "Siemens S7", level: 60, category: { "Control Systems": true } },
                { title: "TIA Portal", level: 60, category: { "Control Systems": true } },
                { title: "Kinetix Servo", level: 70, category: { "Control Systems": true } },
                { title: "PowerFlex Drives", level: 80, category: { "Control Systems": true } },
                { title: "Autocad", level: 35, category: { "Control Systems": true } }
            ],
            filters: ["Front End", "Back End", "Control Systems"],
            filter: "Front End",
            loaded: false,
            debounce: false,
            class: "",
            size: "desktop",
            mobile_options: {
                height: 120,
                width: 120,
                center: {
                    X: 60,
                    Y: 60
                },
                radius: 50,
                stroke: {
                    color: {
                        background: "#d3d3d3",
                        progress: "#cd4400"
                    },
                    width: 5
                },
                text: {
                    X: 60,
                    Y: 60,
                    fontsize: 11
                }
            },
            desktop_options: {
                height: 200,
                width: 200,
                center: {
                    X: 100,
                    Y: 100
                },
                radius: 80,
                stroke: {
                    color: {
                        background: "#d3d3d3",
                        progress: "#cd4400"
                    },
                    width: 7
                },
                text: {
                    X: 100,
                    Y: 100,
                    fontsize: 15
                }
            }
        };

        this.renderSkills = this.renderSkills.bind(this);
        this.onEnterHandler = this.onEnterHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    renderSkills(options) {
        let filtered = this.state.skills.filter(skill => {
            return skill.category[this.state.filter] === true;
        });

        let skills = filtered.map((skill, index) => {
            return (
                <RadialProgressBar
                    key={skill.title}
                    options={options}
                    text={skill.title}
                    progress={skill.level}
                />
            );
        });
        return skills;
    }

    onEnterHandler() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                class: "animated zoomIn"
            });
        }
    }

    clickHandler(event) {
        event.preventDefault();
        if (!this.state.debounce) {
            this.setState({
                filter: event.target.dataset.key,
                debounce: true
            });

            this.delay = setTimeout(() => {
                this.setState({ debounce: false });
            }, 1000);
        }
    }

    render() {
        const customLeaveAnimation = {
            from: { opacity: 1 },
            to: { transform: "scale(.8) rotateZ(-25deg)", opacity: 0 }
        };

        const customEnterAnimation = {
            from: { transform: "scale(.8) rotateZ(25deg)", opacity: 0 },
            to: { opacity: 1 }
        };

        return (
            <div id="Skills" className="cmpnt-skill-detail text-center">
                <div className={this.state.class}>
                    <Waypoint onEnter={this.onEnterHandler} />
                    <div>
                        <span className="header skills-header">My Skillset</span>
                        <ul className="skill-menu-1 nav skills-menu justify-content-center ">
                            {this.state.filters.map(filter => {
                                let style =
                                    this.state.filter === filter ? "nav-link active" : "nav-link";
                                style = this.state.debounce === true ? `${style} disabled` : style;
                                return (
                                    <li
                                        key={filter}
                                        onClick={this.clickHandler}
                                        className="nav-list"
                                    >
                                        <a data-key={filter} className={style} href="">
                                            {filter}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="nav flex-column skill-menu-2">
                            {this.state.filters.map(filter => {
                                const style =
                                    this.state.filter === filter ? "nav-link active" : "nav-link";
                                return (
                                    <li
                                        key={filter}
                                        onClick={this.clickHandler}
                                        className="nav-list"
                                    >
                                        <a data-key={filter} className={style} href="">
                                            {filter}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <MediaQuery query="(min-device-width: 790px)">
                    <div>
                        <FlipMove
                            className="d-flex flex-wrap justify-content-center"
                            maintainContainerHeight={true}
                            leaveAnimation={customLeaveAnimation}
                            enterAnimation={customEnterAnimation}
                            duration={500}
                        >
                            {this.renderSkills(this.state.desktop_options)}
                        </FlipMove>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 790px)">
                    <div>
                        <FlipMove
                            className="d-flex flex-wrap justify-content-center"
                            maintainContainerHeight={true}
                            leaveAnimation={customLeaveAnimation}
                            enterAnimation={customEnterAnimation}
                            duration={500}
                        >
                            {this.renderSkills(this.state.mobile_options)}
                        </FlipMove>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}
