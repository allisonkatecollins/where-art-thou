import React, { Component } from 'react'
import "./Browse.css"
import { Button, Card, CardBody, Collapse} from 'reactstrap'
export default class ExternalArtCard extends Component {
    constructor(props) {
      //super() must be called when you have a constructor
      //prevent this.props from being undefined
      super(props);
      //bind event handler method to instance of "details" button being pushed
      this.toggle = this.toggle.bind(this);
      //set initial state
      this.state = { collapse: false };
    }

    //when Details button is pressed, call toggle() function
    //toggle changes state (which is a boolean) of collapse
    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }

    render() {
      //"art" is from external API
      let art = this.props.art
      //"photos" is from database.json
      let photos = this.props.photos
      return(
        <React.Fragment>
        <Card className="external-art-card">
          <CardBody className="card-body">
            <h4>{art.title}</h4>

            {photos.map(currentPhoto => 
           //title from API must exactly match title in database.json in order for jpgLink to be accessed
            {
              if (art.title === currentPhoto.title) {
              return <img key={currentPhoto.title} className="browse-image" width="100%" src={currentPhoto.jpgLink} alt="public art" />
            }}
            )}
           
                      <Button outline color="info" onClick={this.toggle} style={{ marginBottom: '.5rem' }}>Details</Button>
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
        </React.Fragment>
      )
    }
}
