import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import Map from './map'
import validator from 'validator'
import humanize from 'humanize'
import '../../style/components/contact.scss'

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            map_data: {
                center: {
                    lat: 37.958075,
                    lng: -87.488079
                },
                zoom: 10,
                marker: {
                    position: {
                        lat: 37.958075,
                        lng: -87.488079
                    },
                    defaultAnimation: 2
                }
            },
            loaded: false,
            left_style: 'dnone',
            right_style: 'dnone',
            head_style: 'dnone',
            form: {
                name: {
                    value: '',
                    isValid: false
                },
                email: {
                    value: '',
                    isValid: false
                },
                message: {
                    value: '',
                    isValid: true
                }
            }
        }

        this.onEnter = this.onEnter.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    onEnter() {
        if (!this.state.loaded) {
            this.setState({
                loaded: true,
                left_style: 'animated slideInLeft',
                right_style: 'animated slideInRight',
                head_style: 'animated zoomIn'
            });
        }
    }

    nameChange(event) {
        const { value } = event.target;
        let { form } = this.state;

        form.name.value = value;

        if (validator.isLength(form.name.value, { min: 5 }))
            form.name.isValid = true;
        else 
            form.name.isValid = false;

        this.setState({ form })
    }

    emailChange(event) {
        const { value } = event.target;
        let { form } = this.state;

        form.email.value = value;

        if (validator.isEmail(form.email.value))
            form.email.isValid = true;
        else 
            form.email.isValid = false;

        this.setState({ form })
    }

    messageChange(event) {
        const { value } = event.target;
        let { form } = this.state;

        form.message.value = value;

        if (validator.isLength(form.message.value, { min: 25 }))
            form.message.isValid = true;
        else 
            form.message.isValid = false;

        this.setState({ form })
    }

    componentDidMount() {
        emailjs.init("user_VceqlHKMMMkCgQgCGqPP1");
    }

    submitHandler(event) {
        event.preventDefault();

        const { form } = this.state;

        if (form.name.isValid && form.email.isValid && form.message.isValid) {
            this.sendEmail(() => {
                form.name.value = '';
                form.email.value = '';
                form.message.value = '';
                form.message.isValid = true;

                this.setState({ form });
            });
        }

    }

    sendEmail(cb) {
        const { form } = this.state;
        emailjs.send("gmail", "contact_form", {"email": form.email.value,"name": form.name.value,"message": form.message.value})
        cb();
    }

    render() {
        const { map_data, form } = this.state;
        return (
            <div id="Contact" className="cmpnt-contact container">
                <Waypoint onEnter={this.onEnter} />
                <div className="row align-items-center justify-content-center">
                    <div className={`col-sm-12 col-md-6 map-wrapper ${this.state.left_style}`}>
                        <div className="map">
                            <Map {...map_data} />
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-6 contact-form-wrapper align-self-start ${this.state.right_style}`}>
                        <div className="text-center">
                            <div className={`header contact-header ${this.state.head_style}`}><Waypoint onEnter={this.onEnterHandler} />Connect with Me</div>
                        </div>
                        <div className="text-left">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input className="form-control" 
                                    id="name" 
                                    type="text" 
                                    placeholder="Name"
                                    onChange={this.nameChange}
                                    value={form.name.value} />
                                    {(form.name.isValid && form.name.value !== '') ?
                                        (<i className="fa fa-check"></i>) : (null)}

                                    {(!form.name.isValid && form.name.value !== '') ?
                                        (<i className="fa fa-times"></i>) : (null)}

                                    {(!form.name.isValid && form.name.value !== '') ?
                                        (<div className="form-control-feedback">
                                            Please Enter Your Name, Thanks!
                                        </div>) : (null)}
                                </div> 

                                <div className="form-group">
                                    <input className="form-control form-control-success" 
                                    id="email" 
                                    type="email" 
                                    placeholder="Email"
                                    onChange={this.emailChange}
                                    value={form.email.value} />
                                    {(form.email.isValid && form.email.value !== '') ?
                                        (<i className="fa fa-check"></i>) : (null)}

                                    {(!form.email.isValid && form.email.value !== '') ?
                                        (<i className="fa fa-times"></i>) : (null)}

                                    {(!form.email.isValid && form.email.value !== '') ?
                                        (<div className="form-control-feedback">
                                            Please Provide a Valid Email, Thanks!
                                        </div>) : (null)}
                                </div> 

                                <div className="form-group">
                                    <textarea className="form-control" 
                                    id="message" 
                                    rows="5" 
                                    placeholder="Message"
                                    onChange={this.messageChange}
                                    value={form.message.value}
                                    ></textarea>
                                    {(form.message.isValid && form.message.value !== '') ?
                                        (<i className="fa fa-check"></i>) : (null)}

                                    {(!form.message.isValid && form.message.value !== null) ?
                                        (<div className="form-control-feedback">
                                            Tell Me About How I Can Help You! (25 Chars Min)
                                        </div>) : (null)}
                                </div>

                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-custom">Get Connected</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}