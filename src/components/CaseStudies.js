import React from 'react';
import $ from "jquery";
import {FaAngleDoubleDown} from 'react-icons/fa';

import roWaiver from '../media/ro-waiver.png';

class CaseStudies extends React.Component {

  componentDidMount() {
    this.changeColor();
    this.setActive();
    window.scrollTo(0, 0);
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#case-studies-nav').addClass('active');
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


      }
    });    
  }


  render() { 
    return (
      <>
        <div className="panel" data-color="black">
          <h2>Case studies</h2>
          <FaAngleDoubleDown size={32} className="pulse" style={{"marginTop": "1em"}}/>
        </div>
          <div className="panel" data-color="black">
          <h2>Riverside Outfitters</h2>
          <img className="demo" src={roWaiver} alt="Demo of Riverside Outfitters' waiver system" />
          <div className="panelBodyMobileFlip">
            <div className="panelHalf">
              <p><b>Background</b></p>
              <p>Riverside Outfitters, located in Richmond, VA, provides outdoor adventures in and around the James River Park System. This includes whitewater rafting, kayaking, mountain biking, tree climbing, and summer camps.</p>
              <p><b>Problem</b></p>
              <p>The office is reliant on customers filling out paper waivers when they arrive at the brick-and-morter location. This makes checking customers in for trips a slower process and increases their environmental footprint.</p>
              <p><b>Solution</b></p>
              <p>An online waiver system, backed by a database—customers can fill out their waivers online and employees can manage waivers digitally.</p>
            </div>
            <div className="panelHalf">
              <h3>NimbleTwo provided:</h3>
              <ul className="servicesList">
                <li>Prototyping</li>
                <li>User Experience (UX) Design</li>
                <li>User Interface (UI) Design</li>
                <li>Cloud server management</li>
                <li>Database design</li>
                <li>Automated email system</li>
                <li>Security</li>
                <li>New features & continued maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  };
}

export default CaseStudies;
