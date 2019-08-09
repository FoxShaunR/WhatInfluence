import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfluencerDetail from './components/InfluencerDetail';
import LatestNews from './components/LatestNews';
import Mission from './components/Mission/Mission';
import SearchResults from './components/SearchResults/SearchResults';

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
          </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
