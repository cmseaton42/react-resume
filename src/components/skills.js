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
                { title: 'HTML5', level: 75, category: { 'Front End': true } },
                { title: 'CSS3 / SASS', level: 80, category: { 'Front End': true } },
                { title: 'React', level: 80, category: { 'Front End': true } },
                { title: 'Handlebars', level: 65, category: { 'Front End': true } },
                { title: 'Redux', level: 50, category: { 'Front End': true } },
                { title: 'JS / ES6', level: 85, category: { 'Front End': true, 'Back End': true } },
                { title: 'JQuery', level: 85, category: { 'Front End': true } },
                { title: 'Bootstrap', level: 75, category: { 'Front End': true } },
                { title: 'Git', level: 75, category: { 'Front End': true, 'Back End': true } },
                { title: 'Mocha/Chai', level: 60, category: { 'Front End': true, 'Back End': true } },
                { title: 'MongoDB', level: 75, category: { 'Back End': true }},
                { title: 'SQL', level: 55, category: { 'Back End': true }},
                { title: 'NodeJS', level: 75, category: { 'Back End': true }},
                { title: 'Express', level: 85, category: { 'Back End': true }},
                { title: 'Gulp / Webpack', level: 60, category: { 'Front End': true } },
                { title: 'Studio5000', level: 95, category: { 'Control Systems': true } },
                { title: 'FactoryTalk', level: 95, category: { 'Control Systems': true } },
                { title: 'GX Works 2', level: 80, category: { 'Control Systems': true } },
                { title: 'Proface', level: 85, category: { 'Control Systems': true } },
                { title: 'Cognex', level: 95, category: { 'Control Systems': true }},
                { title: 'Keyence', level: 80, category: { 'Control Systems': true }},
                { title: 'Siemens S7', level: 60, category: { 'Control Systems': true }},
                { title: 'TIA Portal', level: 70, category: { 'Control Systems': true }},
                { title: 'Kinetix Servo', level: 70, category: { 'Control Systems': true }},
                { title: 'PowerFlex Drives', level: 80, category: { 'Control Systems': true }},
                { title: 'Autocad', level: 50, category: { 'Control Systems': true }},
            ],
            filters: ['Front End', 'Back End', 'Control Systems'],
            filter: 'Front End',
            loaded: false,
            animating: false,
            class: '' 
        }

        this.renderSkills = this.renderSkills.bind(this);
        this.onEnterHandler = this.onEnterHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    renderSkills(animating) {
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
            return skill.category[this.state.filter] === true;
        });

        let skills = filtered.map((skill, index) => {
            return (
                    <RadialProgressBar 
                        key={skill.title}
                        options={options}
                        text={skill.title}
                        progress={skill.level}
                        animating= {animating} />
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
        const customLeaveAnimation = {
            from: { opacity: 1 },
            to:   { transform:  'scale(.8) rotateZ(-25deg)', opacity: 0 }
        };

        const customEnterAnimation = {
            from: { transform:  'scale(.8) rotateZ(25deg)', opacity: 0 },
            to:   { opacity: 1 }
        };
        

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
                        leaveAnimation={customLeaveAnimation}
                        enterAnimation={customEnterAnimation}
                        duration={500}
                        onStartAll={ () => { // kill all clone and original intervals
                            let killIntervals = setTimeout(() => {
                                for ( let i = killIntervals; i > 0; i--) clearInterval(i);
                            }, 20);
                        }}
                        >
                            {this.renderSkills()}
                    </FlipMove>
                </div>
                <hr />
            </div>
        )
    }

}