import React from 'react';

import $ from "jquery";
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaAngleDoubleDown} from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";

class Home extends React.Component {

  state = {};

  componentDidMount() {
    this.setActive()
    this.changeColor();
    window.scrollTo(0, 0);
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#home-nav').addClass('active');
  }

  changeColor() {
    // selectors
    var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
        if ($(this).data('color') === 'deer') {
          $('#deer-panel').addClass('opaque');
          $('#deer-panel').removeClass('transparent');

        } else {
          $('#deer-panel').removeClass('opaque');
          $('#deer-panel').addClass('transparent');
        }
      }
    });    
  }
  
  render() { 
    return (
        <>
            <div className="panel" data-color="black">
              <div id="n2-intro-wrapper">
                  <h6 className="n2-services-banner">
                      <span className="not-last">Digital product design</span>
                      <span className="not-last">UX design</span>
                      <span>Software Engineering</span>
                  </h6>
                  <h1 id="n2-tag-line">Build something <span>excellent</span></h1>
                  <FaAngleDoubleDown size={32} className="pulse" style={{"marginTop": "1em"}}/>
              </div>
            </div>
            <div className="panel" data-color="violet">
              <h2>Our Approach</h2>
              <div className="n2-home-quote">
                <p>We're a small team of talented developers, artists, and designers.</p>
                {/* <div className="mobile-hide"> */}
                  <hr style={{color: "white", width: "20vw", backgroundColor: "white", height: "1"}}></hr>
                  <p>In the face of cookie-cutter solutions, big design firms, and excessive outsourcing, we offer a refreshing approach to the development process.</p>
                  <p>We want to work closely with you, to truly listen to your design needs, and at the end of the day we want to <i><b>arrive at an excellent product that does what it's supposed to do</b></i>.</p>
                  <p>It's as simple as that.</p>
                {/* </div> */}
              </div>
              <Link to="/how-we-work">
                <Button className="btn p-3 text-uppercase pl-5 pr-5">Why work with us?</Button>
              </Link>
            </div>
            <div className="panel" data-color="blue">
              <h2>Values</h2>
              <div className="n2-home-quote">
                <p>We're a product of our values</p>
              </div>
              <Link to="/our-story">
                <Button className="btn btn-light p-3 pl-5 pr-5 text-uppercase">See what we're all about</Button>
              </Link>
            </div>
            <div className="panel" data-color="orange">
              <h2>case studies</h2>
              <div className="n2-home-quote">
                <p>Some of the things we've made.</p>
              </div>
              <Link to="/case-studies">
                <Button className="btn btn-light p-3 pl-5 pr-5 text-uppercase">Check us out</Button>
              </Link>
            </div>
        </>
    )
  };
}

export default Home;
