import React, { Component } from 'react'
import "./Lists.css"
import { Button, Card, CardBody, Collapse } from 'reactstrap';
  
//same basic structure as ExternalArtCard
export default class ToVisitCard extends Component {
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
      let savedArt = this.props.savedArt
      let photos = this.props.photos
      return(
        <Card className="toVisitCard">
          <CardBody className="card-body">
            <h4>{savedArt.title}</h4>
            
           {/*  {photos.map(savedPhoto => 
           //title from API must exactly match title in database.json in order for jpgLink to be accessed
            {
              if (savedArt.title === savedPhoto.title) {
              return <img key={savedPhoto.title} className="browse-image" width="100%" src={savedPhoto.jpgLink} alt="public art" />
            }}
            )} */}
              
            <Button outline color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Details</Button>
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