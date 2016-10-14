import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


let CharacterDetail = React.createClass({
    getInitialState() {
      return ({ showModal: false,
                characterComics: []});
    },
    close() {
      this.setState({ showModal: false });
    },
    open() {
      this.setState({ showModal: true });
    },
    componentDidMount: function() {
        let charId = this.props.id;
        console.log("component mounted");
        console.log(charId);
        MarvelApi.comicsByCharacter(charId, function(coms){
            let comsArray = coms["data"]["results"];
            this.setState({ characterComics: comsArray });
        }.bind(this));
        console.log(this.state.characterComics);
    },
    render: function(){
        let series = this.props.series.map(series => {
            return(<div><li>{series.name}</li></div>)
        });
        let stories = this.props.stories.map(story => {
            return(<div><li>{story.name}</li></div>)
        });
        let comics = this.state.characterComics.map((comic) => {
            return (<div>
                <p>{ comic.title }</p>
                <Button bsStyle="primary" bsSize="large" onClick={this.open} value={ comic.id }>View</Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>{comic.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <h4>About</h4>
                      <img src={ comic.thumbnail.path+".jpg"} width="200" height="300"/>
                      <p>{ comic.description }</p>
                      <p>Price: { comic.prices.price }</p>
                      <span>Page count: { comic.pageCout }</span>
                    <hr />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
                </div>
            )
        })
        return(
            <div><Grid>
                <Row className="show-grid">
                  <Col xs={12} md={6}>
                      <h1>{ this.props.name }</h1>
                      <img src={ this.props.picture+".jpg"} width="500" height="600"/>
                  </Col>
                  <Col xs={6} md={6}>
                      <p>{ this.props.description }</p>
                      <p><h2>Series</h2>{ series}</p>
                      <p><h2>Stories</h2> { stories }</p>
                  </Col>
                </Row></Grid>
                <p>{ comics }</p>
            </div>
        )
    }
});

export default CharacterDetail;
