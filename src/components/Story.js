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
                <h2>Nimble</h2>
                <p>Small teams working under one roof can be more flexible, adapt to your needs, and accomplish more.</p>
              </div>
            </div>
        <div className="panel" data-color="black">
          <h2>Engaging</h2>
          <div className="n2-home-quote">
             <p>We want to hear you, and we care about what you have to say. We form relationships with our clients through open communication, feedback, and mutual respect—and we're still working with the vast majority of them.</p>
             <p><GrBlockQuote/></p>
             <p><span>"Friends and good manners will carry you where money won't go."</span> - Margaret Walker</p>
           </div>
        </div>
        <div className="panel" data-color="blue">
              <h2>Empathetic</h2>
              <div className="n2-home-quote">
                <p>People first. Period. Every decision we make is derived from that rule.</p>
                <p><GrBlockQuote/></p>
                <p><span>"When you throw dirt, you lose ground."</span> - Texan Proverb</p>
              </div>
        </div>
        <div className="panel" data-color="violet">
          <h2>Authentic</h2>
          <div className="n2-home-quote">
             <p>We value authenticity and transparancy over egos and self-image. Working with us should feel like working with real human beings, not HR departments or white collar administration.</p>
             <p><GrBlockQuote/></p>
             <p><span>"People who enjoy meetings should not be in charge of anything."</span> - Thomas Sowell</p>
           </div>
        </div>
      </>
    )
  };
}

export default Story;
