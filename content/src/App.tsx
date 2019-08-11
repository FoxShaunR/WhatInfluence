import React from 'react';
import TagManager from 'react-gtm-module';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfluencerDetail from './components/InfluencerDetail';
import LatestNews from './components/LatestNews';
import Mission from './components/Mission/Mission';
import SearchResults from './components/SearchResults/SearchResults';

const tagManagerArgs = {
  gtmId: 'GTM-5KXP9B9',
};

if (process.env.NODE_ENV === 'production') {
  TagManager.initialize(tagManagerArgs);
}

const App: React.FC = () => {
  return (
    <div className={styles.App}>
    <Router>
      <Header />
          <Switch>
            <Route exact path="/" component={LatestNews} />
            <Route path="/mission" component={Mission} />
            <Route path="/search" component={SearchResults} />
            <Route path="/influencer/:id" component={InfluencerDetail} />
            <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
