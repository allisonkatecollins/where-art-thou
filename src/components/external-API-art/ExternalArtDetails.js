//name of work on both /browse and /lists is link to details page
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//addToList function
export default class ExternalArtDetails extends Component {
  
  render() {
    return(
      <React.Fragment>
        <section className="details">
          <h1>art</h1>
          <h2>{this.props.art.title}</h2>
          <p>{this.props.art.location}</p>
        </section>
        <Link className="nav-link back" to={"/browse"}>Back to Browse</Link> 
      </React.Fragment>
    )
  }
}
