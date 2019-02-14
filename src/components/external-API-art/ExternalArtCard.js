import React, { Component } from 'react'
import "./Browse.css"
import { Button, Card, CardBody, Collapse, ListGroupItem } from 'reactstrap';

  //need something to make only one detail button expand at a time
  
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
 
       
                <Card>
                    <CardBody className="card-body">
                      <h4>{art.title}</h4>
                      <img className="browse-image" width="100%" src="/photos/12th-and-porter.jpg" alt="public art" />
                      
                      <ListGroupItem>
                        <Button outline color="warning" onClick={() => 
                          this.props.addToList((this.props.userId), (art.title))}>Add to List
                        </Button>
                    
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
                    </ListGroupItem>

                    </CardBody>
                  </Card>

      )
  }
}