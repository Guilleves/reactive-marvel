import React from 'react';
import {render} from 'react-dom';
// import App from './App';
import Navigation from './Navigation.js';
import Home from './Home.js';
import CharacterList from './CharacterList';
import ComicList from './ComicList';
import SeriesList from './SeriesList';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import Wishlist from './Wishlist';
import {Router, Route, browserHistory, IndexRoute } from 'react-router'

let App = React.createClass({
    render: function() {
        return(
            <Router history={ browserHistory }>
                <Route path={"/"} component={Navigation}>
                    <IndexRoute component={Home}/>
                    <Route path={"characters"} component={CharacterList}/>
                    <Route path={"comics"} component={ComicList}/>
                </Route>
            </Router>
        )
    }
})

ReactDOM.render(<App/>, document.getElementById("main"));
