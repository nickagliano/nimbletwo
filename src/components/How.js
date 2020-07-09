import React from 'react';
import $ from "jquery";
import {FaHatWizard} from 'react-icons/fa';
import {FaAngleDoubleDown} from 'react-icons/fa';

class How extends React.Component {

  componentDidMount() {
    this.changeColor();
    this.setActive();
    window.scrollTo(0, 0);
  }

  setActive() {
    $('li.nav-item.active').removeClass('active');
    $('#how-we-work-nav').addClass('active');
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


  coloredLine() {
    return (
    <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: 10,
            width: '80vw'

        }}
    />)
    }

  render() { 
    return (
      <>
        <div className="panel" data-color="violet">
          <h2>How we work</h2>
            <div className="n2-how-we-work-intro">
            {this.coloredLine()}
              <ul className="n2-how-we-work-list">
                <li>Research</li>
                <li>Define</li>
                <li>Prototype</li>
                <li>Implement</li>
                <li>Operate</li>
              </ul>
              <FaAngleDoubleDown size={32} className="pulse"/>
          </div>
        </div>
        <div className="panel" data-color="violet">
          <h2>Research</h2>
        </div>
        <div className="panel" data-color="violet">
          <h2>Define</h2>
        </div>
        <div className="panel" data-color="violet">
          <h2>Prototype</h2>
        </div>
        <div className="panel" data-color="violet">
          <h2>Implement</h2>
        </div>
        <div className="panel" data-color="violet">
          <h2>Operate</h2>
        </div>
      </>
    )
  };
}

export default How;
