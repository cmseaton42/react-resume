import React, { Component } from 'react'
import RadialProgressBar from './radial-progress-bar'
import Waypoint from 'react-waypoint'


export default class SkillDetail extends Component {
    constructor() {
        super();

        this.state = {
            skills: [
                { title: 'HTML5', level: 75 },
                { title: 'CSS3 / SASS', level: 80 },
                { title: 'React', level: 70 },
                { title: 'Redux', level: 45 },
                { title: 'JS / ES6', level: 85 },
                { title: 'JQuery', level: 85 },
                { title: 'Git', level: 75 },
                { title: 'Gulp / Webpack', level: 60}
            ],
            loaded: false,
            class: '' 
        }

        this.renderSkills = this.renderSkills.bind(this);
        this.onEnterHandler = this.onEnterHandler.bind(this);
    }

    renderSkills() {
        const options = {
            height: 200,
            width: 200,
            center: {
                X: 100,
                Y: 100,
            },
            radius: 80,
            stroke: {
                color: {
                    background: '#d3d3d3',
                    progress: '#cd4400'
                },
                width: 7,
            },
            text: {
                X: 100,
                Y: 100,
                fontsize: 15,
            }
        }

        let skills = this.state.skills.map((skill, index) => {
            return (
                <div key={index} className="text-center">
                    <RadialProgressBar 
                        options={options}
                        text={skill.title}
                        progress={skill.level} />
                </div>
            );
        })
        return skills;
    }

    onEnterHandler() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                class: 'animated slideInDown'
            });
        }
    }

    render() {
        

        return (
            <div id="Skills" className="cmpnt-skill-detail text-center">
                <div style={{fontSize: '50px'}} className={this.state.class}><Waypoint onEnter={this.onEnterHandler} />Skills</div>
                <div className='d-flex flex-row flex-wrap justify-content-around'>
                    {this.renderSkills()}
                </div>
                <hr />
            </div>
        )
    }

}