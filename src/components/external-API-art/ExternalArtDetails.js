//name of work on both /browse and /lists is link to details page
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ExternalArtManager from "./../../modules/ExternalArtManager"

export default class ExternalArtDetails extends Component {
  state = {
    art: []
  }

  componentDidMount() {
    ExternalArtManager.getOne(this.props.match.params.title).then(artDisplay => {
      this.setState({
        art: artDisplay
      })
      console.log(this.state.art[0].description)
    })
  }

  render() {
   return(
     <React.Fragment>
       {
         this.state.art.map(art => 
          <div className="artCard" key={art.title}>
            <h2>{art.title}</h2>
            <img src="/photos/aerial-innovations.jpg" alt="public art"/>
            <h4>{art.first_name} {art.last_name}</h4>
            <p>{art.location}</p>
            <p>{art.medium}</p>
            <p>{art.description}</p>
            {/* <button type = "submit" onClick={() => 
                this.props.addToList((this.props.userId), (art.title))}>Add to List</button> */}
         </div>)
       }
   <Link className="nav-link back" to={"/browse"}>Back to Browse</Link>
   <Link className="nav-link back" to={"/lists"}>Back to My Saved Art</Link>
     </React.Fragment>
   )
  } 
}
  
  
