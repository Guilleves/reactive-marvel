import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


let SeriesDetail = React.createClass({
    getInitialState() {
      return ({ showModal: false });
    },
    close() {
      this.setState({ showModal: false });
    },
    open() {
      this.setState({ showModal: true });
    },
    render: function(){
        let creators = this.props.creators.map(creators => {
            return(<div><li>{creators.name}</li></div>)
        });
        let stories = this.props.stories.map(story => {
            return(<div><li>{story.name}</li></div>)
        });
        // let comics = this.state.characterComics.map((comic) => {
        //     return (<div>
        //         <p>{ comic.title }</p>
        //         <Button bsStyle="primary" bsSize="large" onClick={this.open} value={ comic.id }>View</Button>
        //         <Modal show={this.state.showModal} onHide={this.close}>
        //           <Modal.Header closeButton>
        //             <Modal.Title>{comic.title}</Modal.Title>
        //           </Modal.Header>
        //           <Modal.Body>
        //               <h4>About</h4>
        //               <img src={ comic.thumbnail.path+".jpg"} width="200" height="300"/>
        //               <p>{ comic.description }</p>
        //               <p>Price: { comic.prices.price }</p>
        //               <span>Page count: { comic.pageCout }</span>
        //             <hr />
        //           </Modal.Body>
        //           <Modal.Footer>
        //             <Button onClick={this.close}>Close</Button>
        //           </Modal.Footer>
        //         </Modal>
        //         </div>
        //     )
        // })
        return(
            <div><Grid>
                <Row className="show-grid">
                  <Col xs={12} md={6}>
                      <h1>{ this.props.name }</h1>
                      <img src={ this.props.picture+".jpg"} width="500" height="600"/>
                  </Col>
                  <Col xs={6} md={6}>
                      <p>{ this.props.description }</p>
                      <p><h2>Creators</h2>{ creators }</p>
                      <p><h2>Stories</h2> { stories }</p>
                  </Col>
                </Row></Grid>
            </div>
        )
    }
});

export default SeriesDetail;
