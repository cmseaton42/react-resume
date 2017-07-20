import React, { Component } from 'react'
import RadialProgressBar from './radial-progress-bar'
import Waypoint from 'react-waypoint'

import '../../style/components/skills.scss'


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
            filters: ['All', 'Web Developement', 'Control Systems Engineering'],
            filter: 'All',
            loaded: false,
            class: '' 
        }

        this.renderSkills = this.renderSkills.bind(this);
        this.onEnterHandler = this.onEnterHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
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

    clickHandler(event) {
        event.preventDefault();

        this.setState({
            filter: event.target.dataset.key
        })

    }

    render() {
        

        return (
            <div id="Skills" className="cmpnt-skill-detail text-center">
                <div className={this.state.class}><Waypoint onEnter={this.onEnterHandler} />
                    <div>
                        <span className='banner'>My Skillset</span>
                        <ul className="skill-menu-1 nav justify-content-center ">
                            {this.state.filters.map((filter) => {
                                const style = this.state.filter === filter ? 'nav-link active' : 'nav-link';
                                return <li key={filter} onClick={this.clickHandler} className="nav-list"><a data-key={filter} className={style} href="">{filter}</a></li>;
                            })}
                        </ul>
                        <ul className="nav flex-column skill-menu-2">
                            {this.state.filters.map((filter) => {
                                const style = this.state.filter === filter ? 'nav-link active' : 'nav-link';
                                return <li key={filter} onClick={this.clickHandler} className="nav-list"><a data-key={filter} className={style} href="">{filter}</a></li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-row flex-wrap justify-content-around'>
                    {this.renderSkills()}
                </div>
                <hr />
            </div>
        )
    }

}