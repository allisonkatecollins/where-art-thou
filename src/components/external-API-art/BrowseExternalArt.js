import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import "./Art.css"

export default class BrowseExternalArt extends Component {
  render() {
    return(
      <React.Fragment>
        <Link className="nav-link back" to={"/lists"}>Back to My Saved Art</Link>
        <section className="allArt">
        {
          this.props.art.map(artItem => 
            <div className="artCard" key={artItem.title}>
              <p>{artItem.title}</p>
              <p>{artItem.location}</p>
              <button type = "submit" onClick={() => 
                this.props.addToList((this.props.userId), (artItem.title))}>Add to List</button>
            </div> 
          )
        }
        </section>
      </React.Fragment>
    )
  }
}


//code from reactstrap for dropdown menu
/* export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
} */