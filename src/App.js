import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header/Header.js';
import MainNav from './components/Header/MainNav.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/Main/NotFound.js'
import RecentWorkPage from './components/Main/RecentWorkPage.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="w-100 sans-serif">
        <div className="clearfix border">
          <div className="col col-8 mx-auto">
            <Header title={this.props.title} />
            <MainNav />
            <Switch>
              <Route exact path = "/" render= { () => <Main name='Peche Barone' /> } />
              <Route path="/recentwork" component={RecentWorkPage} />
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
