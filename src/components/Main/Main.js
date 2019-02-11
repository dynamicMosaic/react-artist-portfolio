import React, { Component } from 'react'
// import About from './About.js';
// import RecentWork from './Pages/Results.js';
import Social from './Social.js';
import Flashbook from './Flashbook.js';
import Contact from './Pages/Contact.js';
import ResultSlider from './ResultSlider'
import Results from './Pages/Results'
import Header from '../Header/Header'

class Main extends Component {
  render() {
    return (
      <main>
        <Header />
          <Results name={ this.props.name } />
        <ResultSlider />
          <Social />
          <Flashbook />
          <Contact />
      </main>
    )
  }
}

export default Main;