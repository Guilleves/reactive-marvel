import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import CharacterDetail from './CharacterDetail';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



let CharacterList = React.createClass({
    getInitialState: function() {
        return({ characters: [],
                 filterText: "",
                 view: "",
                 charId: ""})
    },
    handleSearchBar: function(text){
        this.setState({ filterText: text});
        MarvelApi.characters(text, function(chars){
            let charsArray = chars["data"]["results"];
            this.setState({ characters: charsArray });
        }.bind(this))
    },
    handleEnterDetailedView: function(e) {
        this.setState({view: "detail",
                       charId: e.target.value});
    },
    renderDetail: function() {
        let charId = this.state.charId;
        console.log(this.state.characterComics);
        let char = this.state.characters.find(function(character) {
            return character.id == charId;
        });
        console.log("char actual",char);
        return(
            <div><CharacterDetail key={ char.id } id={ char.id } name={ char.name } description={ char.description } picture={ char.thumbnail.path } comics={ char.comics.items } stories={ char.stories.items } events={ char.events.items } series={ char.series.items }/></div>
        )
    },
    renderList: function(){
        //let thumbStyle = {width: "300px", height: "300px"};
        let characterRows = this.state.characters.map((char) => {
            return(<div><Col xs={6} md={4}>
            <Thumbnail className="thumb" src={ char.thumbnail.path+".jpg" } width="200" height="200">
            <h3>{ char.name }</h3>
            <p>
                <Button bsStyle="primary" onClick={this.handleEnterDetailedView} value={ char.id }>View</Button>
            </p>
            </Thumbnail>
            </Col></div>)
        });
        return(<div>
             Look for a character by name: <SearchBar onUserInput={this.handleSearchBar} filterText={this.state.filterText}/>
            <Grid>
            <Row>
            { characterRows }
            </Row>
            </Grid>
            </div>)
    },
    render: function(){
        if (this.state.view === "detail")
            return this.renderDetail();
        else
            return this.renderList();
    }
});

export default CharacterList;
