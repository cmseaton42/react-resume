import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import '../../style/components/profile.scss'

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            about_me: `some stuff in here eventually`,
            loaded: false,
            render_tags: false,
            head_style: '',
            pic_style: '',
            am_style: ''
        }

        this.onEnterHandler = this.onEnterHandler.bind(this);
    }

    componentDidMount() {
        const pic = this.refs.profile_pic;

        pic.addEventListener('animationend', () => this.setState({ render_tags:true }));
    }

    onEnterHandler() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                head_style: 'animated zoomIn',
                pic_style: 'animated slideInLeft',
                am_style: 'animated slideInRight'
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
                <div className="container text-center">
                    <div className={`header profile-header ${this.state.head_style}`}><Waypoint onEnter={this.onEnterHandler} />About Me</div>
                    <div className="row align-items-center justify-content-center">
                        <div ref="profile_pic" className={`col-sm-12 col-md-5 ${this.state.pic_style}`}>
                            <div className="profile-pic">
                                {this.state.render_tags ? this.renderProfileTags() : null}
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-5 text-left ${this.state.am_style}`}>
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