import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import '../../style/components/profile.scss'

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            about_me: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat cursus nisl, non feugiat diam dictum sit amet. Cras rhoncus velit consequat tincidunt sagittis. Vestibulum justo ante, euismod et tortor tristique, aliquet mollis lacus. Morbi nulla diam, mollis quis efficitur efficitur, rutrum vitae urna. Donec a porttitor purus. Nunc eu dolor eros. Fusce volutpat at ante sit amet maximus. Sed semper commodo enim, et tincidunt nisi ultrices eget. Phasellus quis convallis elit, et cursus turpis. Fusce quis massa tincidunt, molestie tortor quis, faucibus est. Mauris tincidunt eleifend nulla, quis ornare arcu pretium auctor. Maecenas maximus sit amet risus in dapibus. Mauris dapibus imperdiet lorem vel tincidunt. Integer eget egestas nisl. Sed sed maximus felis. Vestibulum justo turpis, feugiat ut malesuada a, imperdiet vel odio.
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