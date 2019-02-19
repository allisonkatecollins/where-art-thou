import React, { Component } from 'react'
import "./Browse.css"
import { Button, Card, CardBody, Collapse} from 'reactstrap'
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
      let photos = this.props.photos
      //console.log("photo props:",photos[0].jpgLink)
      //console.log("titles:",art.title, photos[0].title)
      //console.log("photos:", photos)
      return(
        <React.Fragment>
        <Card className="external-art-card">
          <CardBody className="card-body">
            <h4>{art.title}</h4>

            {photos.map(currentPhoto => 
           
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
