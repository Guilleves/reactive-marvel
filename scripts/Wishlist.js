import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import { Panel } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

let Wishlist = React.createClass({
    getInitialState: function() {
        return({list:[],
                ls: JSON.parse(localStorage.getItem('cart')),
                total: 0})
    },
    render: function() {
        let total = 0;
        total = this.state.ls.forEach((comic) => {
            console.log(total);
            console.log(comic.prices[0].price);
            return (total += comic.prices[0].price)
        });
        let wishlist = this.state.ls.map(comic => {
            return(
                <div>
                <Accordion>
                <Panel header={comic.title} bsStyle="primary">
                    <p><img src={comic.thumbnail.path+".jpg"} width="200" height="300"/></p>
                    <span>Price: {comic.prices[0].price}</span>
                </Panel>
                </Accordion>
                </div>
            );
        })
        return (
            <div>
            {wishlist}
            Total: {total}
            </div>
        )
    }
});
export default Wishlist;
