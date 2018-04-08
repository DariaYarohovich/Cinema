import React, { Component } from 'react';
import classes from './FilmsResults.css';

import Aux from '../../hoc/Auxiliary';
import FilmResult from './FilmResult/FilmResult';

class FilmsResults extends Component {
    render() {
        return (
            <Aux>
                <h1>Search results</h1>
                <div className={classes.filmsWrap}>
                    <FilmResult />
                    <FilmResult />
                    <FilmResult />
                    <FilmResult />
                </div>
                <div>Pagination</div>
            </Aux>
        )
    }
}

export default FilmsResults;