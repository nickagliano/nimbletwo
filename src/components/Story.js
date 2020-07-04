import React from 'react';
import $ from "jquery";

class Story extends React.Component {

  componentDidMount() {
    this.changeColor();
    this.setActive();
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

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#story-nav').addClass('active');
  }

  render() { 
    return (
        <div className="panel" data-color="indigo">
          <p>Story</p>
        </div>
    )
  };
}

export default Story;
