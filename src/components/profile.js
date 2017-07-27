import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import '../../style/components/profile.scss'

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            about_me: `Hello, My name is Canaan Seaton. I currently make my home in Evansville, IN where I work as a Control Systems Engineer. From a young age,
            I have been fascinated with problem solving, making it my ambition to chase down problems that are difficult for the purpose of gaining new intuition.  In high school, this 
            manifested itself in teaching myself higher level math when the school's curriculm had been exhausted. Now this desire to learn and grow, manifests itself in 
            learning software design, from low level algorithm design to mastering the latest and greatest front end frameworks. To that end, my hope is to continue to 
            pursue those engaging challenges so long as I am able. This being said, if you are an employer or an individual who has an intriguing problem or simply shares the same passions, be it 
            designing a responsive and emersive website, building software to contribute to the open source community, or designing a full scale control system from the ground up, 
            then I would love to get in touch with you to find out how can help!
            `,
            loaded: false,
            render_tags: false,
            style: 'dnone',
            head_style: '',
            pic_style: '',
            am_style: ''
        }

        this.onEnterHandler = this.onEnterHandler.bind(this);
    }

    componentDidMount() {
        const pic = this.refs.profile_pic;

        pic.addEventListener('animationend', () => this.setState({ render_tags: true }));
    }

    onEnterHandler() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                head_style: 'animated zoomIn',
                pic_style: 'animated slideInLeft',
                am_style: 'animated slideInRight',
                style: ''
            });
        }
    }

    renderProfileTags() {
        return (
            <div className="pic-tags">
                <div className="profile-pic-tag profile-me">
                    Me             
                </div>
                <div className="profile-pic-tag profile-wife">
                    My Beautiful Wife          
                </div>
                <div className="profile-pic-tag profile-son">
                    My Little Baller             
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="Profile" className="cmpnt-profile">
                <Waypoint onEnter={this.onEnterHandler} />
                <div className="container text-center">
                    <div className={`row align-items-center justify-content-center ${this.state.style}`}>
                        <div ref="profile_pic" className={`col-sm-12 col-md-5 ${this.state.pic_style}`}>
                            <div className="profile-pic-wrapper">
                                <div className="profile-pic">
                                    {this.state.render_tags ? this.renderProfileTags() : null}
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-7 align-self-start ${this.state.am_style}`}>
                            <div className="text-center">
                                <div className={`header profile-header ${this.state.head_style}`}>About Me</div>
                            </div>
                            <div className="about-me-wrapper">
                                <p className="about-me-inner">{this.state.about_me}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}