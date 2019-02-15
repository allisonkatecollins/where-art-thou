import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import "./Browse.css"
import { Button } from 'reactstrap';
import ExternalArtCard from './ExternalArtCard';

  
export default class BrowseExternalArt extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

    render() {
      return(
        <React.Fragment>

          <Link className="backBtn" to="/lists">
            <Button color="info">Back to Saved Art</Button>
          </Link>
          
          <Button className="logoutBtn" color="secondary" onClick={() => {
            sessionStorage.clear()  
            this.props.history.push("/")}}>Log Out</Button>

          <h2>BROWSE ALL ART</h2>

        <section className="allArt">
        {
          this.props.art.map(art => 
            <React.Fragment key={art.title}>
              <ExternalArtCard art={art}/>
              <Button outline color="warning" onClick={() => 
                this.props.addToList((this.props.userId), (art.title))}>Add to List   
              </Button>
           </React.Fragment>
          )
        }
        </section>
      </React.Fragment>
    )
  }
}