import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {};

  componentDidMount() {
    window.addEventListener('scroll', this.changeColor);
    this.changeColor();
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.changeColor);
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
      <div className="App">
        <body>
          <header>
            <nav className="main-navigation navbar navbar-expand-lg navbar-light bg-light justify-content-end">
              <div className="n2-site-branding mr-auto">
                <h1>NimbleTwo</h1>
              </div>
              <div className="menu-main-nav-container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                  <ul className="navbar-nav n2-align-left">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div class="panel" data-color="black">
            <div>
              <p>Digital product design</p>
              <p>UX Design</p>
              <p>Software Engineering</p>
            </div>
          </div>
          <div class="panel" data-color="violet">
            <h2>Violet</h2>
          </div>
          <div class="panel" data-color="indigo">
            <h2>Indigo</h2>
          </div>
          <div class="panel" data-color="blue">
            <h2>Blue</h2>
          </div>
          <div class="panel" data-color="green">
            <h2>Green</h2>
          </div>
          <div class="panel" data-color="yellow">
            <h2>Yellow</h2>
          </div>
          <div class="panel" data-color="orange">
            <h2>Orange</h2>
          </div>
          <div class="panel" data-color="red">
            <h2>Red</h2>
          </div>
        </body>
      </div>
    )
  };
}

export default App;
