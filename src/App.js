import React from 'react';

import Home from './components/Home';
import Story from './components/Story';
import How from './components/How';
import Contact from './components/Contact';
import CaseStudies from './components/CaseStudies';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import $ from "jquery";
import "bootstrap/js/src/collapse.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Deer from './media/deer.png';


class App extends React.Component {

  state = {};

  componentDidMount() {
    window.addEventListener('scroll', this.changeColor);
    window.scrollTo(0, 0);
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
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });

        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));

        if ($(this).data('color') === 'deer') {
          $('#deer-panel').addClass('opaque');
          $('#deer-panel').removeClass('transparent');

        } else {
          $('#deer-panel').removeClass('opaque');
          $('#deer-panel').addClass('transparent');
        }

      }
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <nav className="main-navigation navbar navbar-expand-lg navbar-light bg-light justify-content-end">
              <div className="n2-site-branding mr-auto">
                <img src={Deer} alt="logo, a deer looking into the distance"></img>
                <h1>Nimble<span>Two</span></h1>
              </div>
              <div className="menu-main-nav-container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                  <ul className="navbar-nav n2-align-left">
                    <li id="home-nav" className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li id="how-we-work-nav" className="nav-item">
                      <Link to="/how-we-work" className="nav-link">How We Work</Link>
                    </li>
                    <li id="story-nav" className="nav-item">
                      <Link to="/our-story" className="nav-link">Our Story</Link>
                    </li>
                    <li id="case-studies-nav" className="nav-item">
                      <Link to="/case-studies" className="nav-link">Case Studies</Link>
                    </li>
                    <li id="contact-nav" className="nav-item">
                      <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <body>
            <Switch>
              <Route path="/our-story">
                <Story />
              </Route>
              <Route path="/how-we-work">
                <How />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/case-studies">
                <CaseStudies />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </body>
          <footer className="footer">
            <p>© 2022 Nimble Two</p>
          </footer>
        </Router>
      </div>
    )
  };
}

export default App;
