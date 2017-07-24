import React, { Component } from 'react'
import RadialProgressBar from './radial-progress-bar'
import Waypoint from 'react-waypoint'
import FlipMove from 'react-flip-move'

import '../../style/components/skills.scss'


export default class SkillDetail extends Component {
    constructor() {
        super();

        this.state = {
            skills: [
                { title: 'HTML5', level: 75, category: 'Web Developement' },
                { title: 'CSS3 / SASS', level: 80, category: 'Web Developement' },
                { title: 'React', level: 70, category: 'Web Developement' },
                { title: 'Redux', level: 45, category: 'Web Developement' },
                { title: 'JS / ES6', level: 85, category: 'Web Developement' },
                { title: 'JQuery', level: 85, category: 'Web Developement' },
                { title: 'Git', level: 75, category: 'Web Developement' },
                { title: 'Gulp / Webpack', level: 60, category: 'Web Developement'},
                { title: 'Studio5000', level: 95, category: 'Control Systems Engineering'},
                { title: 'FactoryTalk', level: 95, category: 'Control Systems Engineering'},
                { title: 'GX Works 2', level: 75, category: 'Control Systems Engineering'}
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

        let filtered = this.state.skills.filter(skill => {
            return skill.category === this.state.filter || this.state.filter === 'All';
        });

        let skills = filtered.map((skill, index) => {
            return (
                    <RadialProgressBar 
                        key={skill.title}
                        options={options}
                        text={skill.title}
                        progress={skill.level} />
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
                        <span className='header'>My Skillset</span>
                        <ul className="skill-menu-1 nav skills-menu justify-content-center ">
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
                <div >
                    <FlipMove className='d-flex flex-wrap justify-content-center' 
                        maintainContainerHeight={true} 
                        leaveAnimation={'none'} 
                        duration={500}>
                            {this.renderSkills()}
                    </FlipMove>
                </div>
                <hr />
            </div>
        )
    }

}