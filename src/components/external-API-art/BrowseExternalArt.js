import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Browse.css"
import { Button, Card, Row, Col } from 'reactstrap';
import ExternalArtCard from './ExternalArtCard';
import ToVisitCard from "../user-lists/ToVisitCard"

  
export default class BrowseExternalArt extends Component {
    render() {
      return(
        <React.Fragment>

          <Link to="/lists">
            <Button className="sticky-top" color="info">Back to Saved Art</Button>
          </Link>
          
          <Button className="logoutBtn" color="secondary" onClick={() => {
            sessionStorage.clear()  
            this.props.history.push("/")}}>Log Out</Button>

          <h2>BROWSE ALL ART</h2>

        <Row>
        
        {
          //loop through all object in external API and render ExternalArtCard component for each one
          //"art" is the external API, "photos" is an array in database.json
          this.props.art.map(art => 
            <Col key={art.title}>
            <Card className="allArt">
            <ExternalArtCard photos={this.props.photos} art={art}/>
            
            {/* addToList is defined in ApplicationViews and calls a user-dependent POST fetch */}
              <Button className="addBtn" outline color="dark" onClick={() => 
                this.props.addToList((this.props.userId), (art.title))}>Add to List   
              </Button>

           </Card>
           </Col>
          )
        }
        </Row>
      </React.Fragment>
    )
  }
}