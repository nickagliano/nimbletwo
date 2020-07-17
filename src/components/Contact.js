import React from 'react';
import $ from "jquery";

import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

class Contact extends React.Component {

  componentDidMount() {
    this.changeColor();
    this.setActive();
    window.scrollTo(0, 0);
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#contact-nav').addClass('active');
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
      <div className="panel" data-color="black">
        <h2>Contact</h2>
        <div className="social-media-wrapper">
          <AiOutlineGithub size={32} onClick={() => window.open("https://www.github.com/nickagliano", "_blank")}/>
          <AiFillLinkedin style={{color: "white"}} size={32} onClick={() => window.open("https://www.linkedin.com/in/nickagliano/", "_blank")}/>
          <AiOutlineInstagram style={{color: "white"}} size={32} onClick={() => window.open("https://www.instagram.com/nickagliano/", "_blank")}/>
        </div>
      </div>
    )
  };
}

export default Contact;
