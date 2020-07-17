import React from 'react';
import $ from "jquery";
import {GrBlockQuote} from 'react-icons/gr';

class Story extends React.Component {

  componentDidMount() {
    this.changeColor();
    this.setActive();
    window.scrollTo(0, 0);
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
        <div className="panel" data-color="black">
          <h2>Who are we?</h2>
        </div>
        <div id="deer-panel" className="panel" data-color="deer">
              <div className="deer-panel-wrapper">
                <h2>NIMBLE</h2>
                <p>We believe that small teams working under one roof can accomplish so much more than big design firms and corporations.</p>
              </div>
            </div>
        <div className="panel" data-color="black">
          <h2>Loyal</h2>
          <div className="n2-home-quote">
             <p>We foster deep partnerships. We’re still working regularly with the vast majority of clients.</p>
             {/* <p><GrBlockQuote/></p>
             <p><span>"Quote."</span> - Human</p> */}
           </div>
        </div>
        <div className="panel" data-color="blue">
              <h2>Empathetic</h2>
              <div className="n2-home-quote">
                <p>People first, always. Every choice we make stems from that simple truth.</p>
                <p><GrBlockQuote/></p>
                <p><span>"Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe."</span> - Lex Luther</p>
              </div>
        </div>
      </>
    )
  };
}

export default Story;
