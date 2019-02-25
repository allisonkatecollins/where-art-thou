import React, { Component } from 'react'
import "./Lists.css"
import { Button, Card, CardBody, Collapse } from 'reactstrap';
//import ExternalArtManager from "./../../modules/ExternalArtManager"
export default class ToVisitCard extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, 
                   artToVisit: [] };

  }

    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }

    render() {
      let art = this.props.art
      //let artItem = this.state.artToVisit
      console.log("art title", this.props.art)
      //console.log(this.state, "STATE")
      //console.log("artItem", artItem)
      //console.log("savedArt:", savedArt)
 
      return(

        <Card className="toVisitCard">
          <CardBody className="card-body">
         
            <Button value={this.props.art.title} outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
              <Collapse isOpen={this.state.collapse}>
                  <CardBody className="details-expand">
                    <p>Artist: {art.first_name} {art.last_name}</p>
                    <p>{art.location}</p>
                    <p>{art.type}</p>
                    <p>{art.medium}</p>
                    <p>{art.description}</p>
                  </CardBody>
              </Collapse>           

            
          </CardBody>
        </Card>
      )
    }
}