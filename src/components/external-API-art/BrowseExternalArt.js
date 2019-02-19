import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Browse.css"
import { Button, Card } from 'reactstrap';
import ExternalArtCard from './ExternalArtCard';

  
export default class BrowseExternalArt extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, currentPhoto: {} };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  updateState() {

  }

    render() {
      return(
        <React.Fragment>

          <Link to="/lists">
            <Button className="backBtn" color="info">Back to Saved Art</Button>
          </Link>
          
          <Button className="logoutBtn" color="secondary" onClick={() => {
            sessionStorage.clear()  
            this.props.history.push("/")}}>Log Out</Button>

          <h2>BROWSE ALL ART</h2>

        <section>
        
        {
          this.props.art.map(art => 
            <Card class="allArt" key={art.title}>
            <ExternalArtCard photos={this.props.photos} art={art}/>
            
              <Button className="addBtn" outline color="warning" onClick={() => 
                this.props.addToList((this.props.userId), (art.title))}>Add to List   
              </Button>

           </Card>
          )
        }
        </section>
      </React.Fragment>
    )
  }
}