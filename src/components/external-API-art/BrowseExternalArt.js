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
            //on click of art title, page routes to details page
            <div className="artCard" key={artItem.title}>
              <Link className="nav-link" to={`/browse/${artItem.title}`}>{artItem.title}</Link>
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