import React from 'react';
import $ from "jquery";

class Contact extends React.Component {

  componentDidMount() {
    this.setActive();
    this.resetBody();
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#contact-nav').addClass('active');
  }

  resetBody() {
    // Remove all classes on body with color-
    let $body = $('body');

    $body.removeClass(function (index, css) {
      return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
    });
  }

  render() { 
    return (
          <p>contact</p>
    )
  };
}

export default Contact;
