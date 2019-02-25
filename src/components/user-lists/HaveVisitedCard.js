import React, { Component } from 'react'
import "./Lists.css"
import { Button, Card, CardBody, Collapse } from 'reactstrap';


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
    return(
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
        </Card>   
    )
  }
}