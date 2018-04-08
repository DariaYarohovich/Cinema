import React, { Component } from 'react';
import classes from './App.css';

import FilmResults from './FilmsResults/FilmsResults';

class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <header className={classes.header}>
          <div className={classes.container}>Header</div>
        </header>
        <div className={classes.navigation}>
          <div className={classes.container}>navigation</div>
        </div>
        <div className={classes.main}>
          <div className={classes.container}>
            <FilmResults />
          </div>
        </div>
        <footer className={classes.footer}>
          <div className={classes.container}>footer</div>
        </footer>
      </div>
    );
  }
}

export default App;
