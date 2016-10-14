import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

let ComicDetail = React.createClass({
    render: function(){
        return(
            <div>
            <Grid>
                <Row className="show-grid">
                <Col xs={6} md={6}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <span>{this.props.chars}</span>
                    <p><h3>Price:</h3>
                     {this.props.price}</p>
                    <p><h3>Number of pages:</h3>
                    {this.props.pages}</p>
                </Col>
                  <Col xs={12} md={6}><img src={this.props.picture+".jpg"}/></Col>
                </Row>
            </Grid>
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

export default ComicDetail;
