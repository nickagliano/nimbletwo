import React from 'react';
import $ from "jquery";
import {FaHatWizard} from 'react-icons/fa';
import {FaAngleDoubleDown} from 'react-icons/fa';
import Arrow from '../media/arrow.svg';
import Line from '../media/line.svg';
import StartLine from '../media/startLine.svg';
import EndLine from '../media/endLine.svg';

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
            <div className="n2-wrap-list">
              <img src={Arrow} alt="An arrow facing downwards"></img>
              <ul className="n2-how-we-work-list">
                <li>Research</li>
                <li>Prototype</li>
                <li>Implement</li>
                <li>Operate</li>
              </ul>
            </div>
              <FaAngleDoubleDown size={32} className="pulse"/>
          </div>
        </div>
        <div className="panel" data-color="violet">
          <div className="stretchToFill">
            <img src={StartLine} alt="A long, skinny line with a circle node at the start"></img>
          </div>
          <h2 style={{marginTop: '1em'}}>Research</h2>
          <div className="panelBodyVertical">
              <h4><i>A shared understanding</i></h4>
              <p>The world is full of meticulously built products that completely missed the mark—products that aren't needed, products that aren’t delivering great experiences, and products that aren’t meeting the needs of their users.</p>
              <p>We value research, understanding, and communication just as much as developing a solution. Empathy is the foundation of design. You can't develop a solution if you don't fully understand what the solution needs to fix.</p>
          </div>
          <div className="stretchToFill">
            <img src={StartLine} alt="A long, skinny line with a circle node at the start"></img>
          </div>
        </div>
        <div className="panel" data-color="violet">
          <div className="stretchToFill">
            <img src={Line} alt="A long, skinny line"></img>
          </div>
          <h2 style={{marginTop: '1em'}}>Prototype</h2>
          <div className="panelBodyVertical">
            <div className="panelHalf">
              <h4><i>Make it real</i></h4>
            </div>
            <div className="panelHalf">
              <p>Prototypes clarify and accelerate everyone's understanding of the project, so you get where you're going much faster and better equipped for success.</p>
              <p>Our process is very transparent. As we design prototypes, we use them to communicate ideas back and forth—is the design closer to or further from what you think the target is?</p>
            </div>
          </div>
          <div className="stretchToFill">
            <img src={StartLine} alt="A long, skinny line with a circle node at the start"></img>
          </div>
        </div>
        <div className="panel" data-color="violet">
          <div className="stretchToFill">
            <img src={Line} alt="A long, skinny line"></img>
          </div>
          <h2 style={{marginTop: '1em'}}>Implement</h2>
          <div className="panelText">
            <p>This is where the hardcore engineering happens. Our ridiculously experienced team of designers and engineers work with you daily towards our shared goal. We work out in the open, delivering progress continuously.</p>
          </div>
          <div className="stretchToFill">
            <img src={StartLine} alt="A long, skinny line with a circle node at the start"></img>
          </div>
        </div>
        <div className="panel" data-color="violet">
          <div className="stretchToFill">
            <img src={Line} alt="A long, skinny line"></img>
          </div>
          <h2 style={{marginTop: '1em'}}>Operate</h2>
          <div className="panelText">
            <p>A cloud-native digital product has to be stable, reliable, and performant. That's why we simplify as much as possible, deploy early, deploy often, instrument everything, and relentlessly automate.</p>
          </div>
          <div className="stretchToFill">
            <img src={EndLine} alt="A long, skinny line with a smiley face at the end"></img>
          </div>
          <p>Satisfaction!</p>
        </div>
      </>
    )
  };
}

export default How;
