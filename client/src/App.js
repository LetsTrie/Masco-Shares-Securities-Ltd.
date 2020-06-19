import React, { useEffect } from 'react';
import AOS from 'aos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Index';
import OurServices from './pages/services';
import Contact from './pages/contact';
import Directors from './pages/members/Directors';
import Others from './pages/members/Others';
import Profile from './pages/company/Profile';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/company/profile' component={Profile} />
          <Route exact path='/members/directors' component={Directors} />
          <Route exact path='/members/others' component={Others} />
          <Route exact path='/services' component={OurServices} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
