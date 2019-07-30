import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LatestNews from './components/LatestNews/LatestNews';
import Mission from './components/Mission/Mission';
import SearchResults from './components/SearchResults/SearchResults';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
          <Switch>
            <Route exact path="/" component={LatestNews} />
            <Route path="/mission" component={Mission} />
            <Route path="/search" component={SearchResults} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
