import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import "./Art.css"

export default class BrowseExternalArt extends Component {
  render() {
    return(
      <React.Fragment>
        <h2>BROWSE ALL ART</h2>
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