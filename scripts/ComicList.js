import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import ComicDetail from './ComicDetail';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

let ComicList = React.createClass({
    getInitialState: function(){
        return({ comics: [],
                 filterText: "",
                 comicId: "",
                 view: "",
                 cart: JSON.parse(localStorage.getItem('cart'))});
    },
    handleSearchBar: function(text) {
        this.setState({filterText: text});
        MarvelApi.comics(text, function(coms){
            let comsArray = coms["data"]["results"];
            this.setState({ comics: comsArray });
        }.bind(this))
    },
    handleEnterDetailedView: function(e) {
        this.setState({view: "detail",
                       comicId: e.target.value,
                       comicName: e.target.name})
    },
    addComicToCart: function(e) {
        console.log("ls", JSON.parse(localStorage.getItem('cart')));
        this.setState({cart: JSON.parse(localStorage.getItem('cart'))});
        console.log("estado", this.state.cart);
        let comicId = e.target.value;
        let comic = this.state.comics.find(comic => {
            return comic.id == comicId});
        let cart = this.state.cart;
        console.log("comic", comic);
        if (this.state.cart == null){
            cart = [];
            //cart.push(<li><ComicRow key={ comic.id } name={ comic.name } picture={ comic.picture }/></li>);
            cart.push(comic);
        }
        else {
            cart.push(comic);
        };
        console.log("cart final", cart);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    renderDetail: function() {
        let comicId = this.state.comicId;
        console.log(this.state.comics);
        console.log(comicId);
        let comic = this.state.comics.find(function(comic) {
            return comic.id == comicId;
        });
        console.log(comic);
        return(
            <div><ComicDetail key={ comic.id } id={ comic.id } title={ comic.title } description={ comic.description } picture={ comic.thumbnail.path } chars={ comic.characters.items } stories={ comic.stories.items } events={ comic.events.items } series={ comic.series.items } pages={comic.pageCount} price={ comic.prices[0].price } /></div>
        )
    },
    render: function() {
        let comicRows = this.state.comics.map((comic) => {
            return (
                <div className="thumb"><Col xs={6} md={4}>
                <Thumbnail src={ comic.thumbnail.path+".jpg" } alt="242x200">
                <h3>{ comic.title }</h3>
                <p>
                    <Button bsStyle="primary" value={ comic.id } onClick={ this.handleEnterDetailedView }>View</Button>
                    <button type="button" className="btn" value={ comic.id } name={comic.name} onClick={ this.addComicToCart }>Add to cart</button>
                </p>
                </Thumbnail>
                </Col></div>)});
//<li><ComicRow key={ comic.id } name={ comic.title } description={ comic.description } picture={ comic.thumbnail.path }/></li>)
        if (this.state.view == "detail")
            return this.renderDetail();
        else
            return(
                <div>
                <Grid>
                <Row>
                { comicRows }
                </Row>
                </Grid>
                <p>Look for a comic by name: <SearchBar className="form-control input-lg" onUserInput={this.handleSearchBar} filterText={this.state.filterText}/></p>
                </div>
            )
    }
});

// let ComicRow = React.createClass({
//     render: function(){
//         return( <div>
//                <p>Comic: { this.props.name }</p>
//                <img src={ this.props.picture+".jpg"} width="300" height="300"/>
//                <p>{ this.props.description }</p>
//                </div>)
//     }
// });

export default ComicList;
