import React, { Component } from 'react'
import "./Lists.css"
import { Button, Card, CardBody, Collapse } from 'reactstrap';
  
//same basic structure as ExternalArtCard
export default class ExternalArtCard extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
    render() {
      let art = this.props.art
      //console.log(this.props.addToList())
      return(
        <Card className="toVisitCard">
          <CardBody className="card-body">
            <img className="card-image" width="100%" src="/photos/a-splash-of-color.jpg" alt="public art" />
              
            <Button outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody className="details-expand">
                    <p>Artist: {art.first_name} {art.last_name}</p>
                    <p>{art.location}</p>
                    <p>{art.medium}</p>
                    <p>{art.description}</p>
                  </CardBody>
                </Card>
              </Collapse>           

            <Button color="info" size="sm" 
              //on click of button - change value of visited to false
              //art item should move to "Have Visited" list
              onClick={() => {
                const visitedArt = {
                  title: this.props.savedArt.title,
                  visited: !this.state.visited,
                      userId: sessionStorage.getItem("User")
                    }
                this.props.updateList(this.props.savedArt.id, visitedArt)}}>I've been here!
            </Button>

            <Button color="warning" size="sm"
              //on click of button - remove item from "To Visit" list
              onClick={() => this.props.deleteItem(this.props.savedArt.id)}>
              Remove from List
            </Button>
          </CardBody>
        </Card>/* ,
        
        <Card className="HaveVisitedCard">
          <CardBody className="card-body">
            <img className="card-image" width="100%" src="/photos/a-splash-of-color.jpg" alt="public art" />
              
            <Button outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody className="details-expand">
                    <p>Artist: {art.first_name} {art.last_name}</p>
                    <p>{art.location}</p>
                    <p>{art.medium}</p>
                    <p>{art.description}</p>
                  </CardBody>
                </Card>
              </Collapse> 
            </CardBody>        
        </Card>        */
      )
    }
}