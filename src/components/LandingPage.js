import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {

  render() {
    return(
      <React.Fragment>
        <section className="links">
        {
            <div className="browseCard">
              <Link className="nav-link browse" to={"/browse"}>BROWSE</Link>
            </div> 
        }
        {
            <div className="listsCard">
              <Link className="nav-link lists" to={"/lists"}>MY SAVED ART</Link>
            </div> 
        }
        </section>
      </React.Fragment>
    )
  }
}