import { React } from 'react';
import { Carousel } from 'react-bootstrap';


let Home = React.createClass({
    render: function() {
        <div>
            <Carousel>
                <Carousel.Item>
                    <img width={1280} height={720} alt="1280x500" src="/assets/logo.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1280} height={720} alt="900x500" src="/assets/avengers.jpg"/>
                    <Carousel.Caption>
                        <h3>Characters</h3>
                        <p>Search characters by name</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1280} height={720} alt="900x500" src="/assets/series.jpg"/>
                    <Carousel.Caption>
                        <h3>Comics</h3>
                        <p>Search comics by name</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    }
});



export default Home;
