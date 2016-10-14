import React from 'react';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import SeriesDetail from './SeriesDetail';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



let SeriesList = React.createClass({
    getInitialState: function() {
        return({ series: [],
                 filterText: "",
                 view: "",
                 seriesId: ""})
    },
    componentDidMount: function(){
        let year = this.props.year;
        MarvelApi.seriesByYear(year, function(series){
            let seriesArray = series["data"]["results"];
            this.setState({ series: seriesArray });
        }.bind(this))
    },
    handleEnterDetailedView: function(e) {
        this.setState({view: "detail",
                       seriesId: e.target.value});
    },
    renderDetail: function() {
        let seriesId = this.state.seriesId;
        console.log(this.state.series);
        let series = this.state.series.find(function(series) {
            return series.id == seriesId;
        });
        console.log("serie actual",series);
        return(
            <div><SeriesDetail key={ series.id } id={ series.id } name={ series.title } description={ series.description } picture={ series.thumbnail.path } comics={ series.comics.items } stories={ series.stories.items } creators={ series.creators.items } /></div>
        )
    },
    renderList: function(){
        //let thumbStyle = {width: "300px", height: "300px"};
        let seriesRows = this.state.series.map((series) => {
            return(<div><Col xs={6} md={4}>
            <Thumbnail className="thumb" src={ series.thumbnail.path+".jpg" } width="200" height="200">
            <h3>{ series.title }</h3>
            <p>
                <Button bsStyle="primary" onClick={this.handleEnterDetailedView} value={ series.id }>View</Button>
            </p>
            </Thumbnail>
            </Col></div>)
        });
        return(<div>
            <Grid>
            <Row>
            { seriesRows }
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

export default SeriesList;
