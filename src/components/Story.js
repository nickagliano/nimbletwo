import React from 'react';
import $ from "jquery";

class Story extends React.Component {

  componentDidMount() {
    this.setActive();
    this.resetBody();
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#story-nav').addClass('active');
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
          <p>Story</p>
    )
  };
}

export default Story;
