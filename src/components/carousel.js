import React, {  Component } from 'react'
import Slider from 'react-slick'

import '../../style/components/carousel.scss'

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      fade: true,
      autoplaySpeed: 4000,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      swipe: false,
      swipeToSlide: false
    };

    return (
      <div className="cmpnt-carousel">
        <Slider {...settings}>
          <div className="slide"><img className='img-responsive' src='/static/images/carousel1.jpg' /></div>
          <div className="slide"><img className='img-responsive' src='/static/images/carousel2.jpg' /></div>
        </Slider>
      </div>
    );
  }
}