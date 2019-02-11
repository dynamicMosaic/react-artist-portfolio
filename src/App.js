import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
// import Header from './components/Header/Header.js';
import MainNav from './components/Header/MainNav.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/Main/NotFound.js'
import ResultsPage from './components/Main/Pages/ResultsPage';
import CriminalDef from './components/Main/Pages/CriminalDef.js';
import Testimonials from './components/Main/Pages/Testimonials'
import Results from './components/Main/Pages/Results'
import Contact from './components/Main/Pages/Contact'
import Articles from './components/Main/Pages/Articles'
import Attorneys from './components/Main/Pages/Attorneys'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="w-100 sans-serif">
        <div className="clearfix border">
          <div className="col col-8 mx-auto">
            <MainNav />
            <Switch>

              {/* Wrap route immediately below <Main/> in <Canvas/>? */}

              <Route exact path = "/" render= { () => <Main name='Ferrentino & Associates' /> } /> 
              <Route path="/results" component={ResultsPage} />
              <Route exact path = "/results" render= { () => <Results /> } />
              <Route exact path = "/attorneys" render= { () => <Attorneys /> } />
              <Route exact path = "/contact" render= { () => <Contact /> } />
              <Route exact path = "/testimonials" render= { () => <Testimonials /> } />
              <Route exact path = "/blog" render= { () => <Articles /> } />
              <Route exact path = "/criminal-defense" render= { () => <CriminalDef /> } />
              <Route component= { NotFound} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
      </BrowserRouter>

    )
  }
}

export default App;
