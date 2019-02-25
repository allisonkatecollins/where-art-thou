import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap'

export default class LandingPage extends Component {
  render() {
      return (
        <React.Fragment>
          <Jumbotron className="jumbotron1 fluid">
            <Container> 
              <h1>
                <Link className="browse-link" to="/browse">BROWSE</Link>
              </h1>
            </Container>
          </Jumbotron>
          <Jumbotron className="jumbotron2 fluid">
            <Container> 
              <h1>
                <Link className="lists-link" to="/lists">MY SAVED ART</Link>
              </h1>
            </Container>
          </Jumbotron>
        </React.Fragment>
           )
  }
}
    
  