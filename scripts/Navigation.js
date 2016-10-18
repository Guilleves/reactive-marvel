import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';


let Navigation = React.createClass({
    render: function() {
        <div>
            <Navbar inverse>
                <Navbar.Header>
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={0} onSelect={onSelectMain} href="#">Marvel Catalogue</NavItem>
                    <NavItem eventKey={1} onSelect={onSelectCharacters} href="#">Characters</NavItem>
                    <NavItem eventKey={2} onSelect={onSelectComics} href="#">Comics</NavItem>
                    <NavDropdown eventKey={3} title="Series" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1} onSelect={onSelectYear2016} >2016</MenuItem>
                      <MenuItem eventKey={3.2} onSelect={onSelectYear2015} >2015</MenuItem>
                      <MenuItem eventKey={3.3} onSelect={onSelectYear2014} >2014</MenuItem>
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
        </div>
    }
});
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
    ReactDOM.render(<Wishlist />, document.getElementById("main"));
};
// how do I create a single function that takes a year as parameter?
function onSelectYear2016(eventKey){
    ReactDOM.render(<SeriesList year={2016}/>, document.getElementById("main"));
};
function onSelectYear2015(eventKey){
    ReactDOM.render(<SeriesList year={2015}/>, document.getElementById("main"));
};
function onSelectYear2014(eventKey){
    ReactDOM.render(<SeriesList year={2014}/>, document.getElementById("main"));
};
//original: &apikey=039eb48267ed197802f5e77e78d0f3f5&hash=e90ab34566660a82686c9d188a356fbd
/////////////////////////////////////////////////



export default Navigation;
