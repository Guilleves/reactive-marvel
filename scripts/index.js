import React from 'react';
import {render} from 'react-dom';
import App from './App';
import CharacterList from './CharacterList';
import ComicList from './ComicList';
import MarvelApi from './marvel_api';
import SearchBar from './SearchBar';
import Wishlist from './Wishlist';


/////////////////////////////////////////////////
function onSelectCharacters(eventKey){
    ReactDOM.render(<CharacterList />, document.getElementById("main"));
};
function onSelectComics(eventKey){
    ReactDOM.render(<ComicList />, document.getElementById("main"));
};
function onSelectMain(eventKey){
    ReactDOM.render(navbarInstance, document.getElementById("navbar"));
    ReactDOM.render(carouselInstance, document.getElementById("main"));
};
function onSelectWishlist(eventKey){
    ReactDOM.render(<Wishlist/>, document.getElementById("main"));
};
//original: &apikey=039eb48267ed197802f5e77e78d0f3f5&hash=e90ab34566660a82686c9d188a356fbd
/////////////////////////////////////////////////
let Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem,
    NavDropdown = ReactBootstrap.NavDropdown,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Thumbnail = ReactBootstrap.Thumbnail,
    Button = ReactBootstrap.Button,
    Modal = ReactBootstrap.Modal,
    Carousel = ReactBootstrap.Carousel,
    Panel = ReactBootstrap.Panel,
    Accordion = ReactBootstrap.Accordion;

const navbarInstance = (
<Navbar inverse>
<Navbar.Header>
</Navbar.Header>
<Navbar.Collapse>
  <Nav>
    <NavItem eventKey={0} onSelect={onSelectMain} href="#">Marvel Catalogue</NavItem>
    <NavItem eventKey={1} onSelect={onSelectCharacters} href="#">Characters</NavItem>
    <NavItem eventKey={2} onSelect={onSelectComics} href="#">Comics</NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
  <Nav pullRight>
    <NavItem eventKey={1} onSelect={onSelectWishlist} href="#">Wishlist</NavItem>
    <NavItem eventKey={2} href="#">Link Right</NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>
);

const carouselInstance = (
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
);

ReactDOM.render(carouselInstance, document.getElementById("main"));
ReactDOM.render(navbarInstance, document.getElementById("navbar"));
