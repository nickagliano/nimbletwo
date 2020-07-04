import React from 'react';
import $ from "jquery";

class How extends React.Component {

  componentDidMount() {
    this.setActive();
    this.resetBody();
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#how-we-work-nav').addClass('active');
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
          <p>How we work</p>
    )
  };
}

export default How;
