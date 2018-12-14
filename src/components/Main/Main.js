import React, { Component } from 'react'
import About from './About.js';
import RecentWork from './RecentWork.js';
import Social from './Social.js';
import Flashbook from './Flashbook.js';
import Contact from './Contact.js';



class Main extends Component {
  render() {
    return (
      <main>
          <About />
          <RecentWork name={ this.props.name } />
          <Social />
          <Flashbook />
          <Contact />
      </main>
    )
  }
}

export default Main;