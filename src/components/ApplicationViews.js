import React, { Component } from "react";
import { Route } from "react-router-dom";
import ExternalArtManager from "../modules/ExternalArtManager";
//import LoginManager from "../modules/LoginManager";
//import PhotoManager from "../modules/PhotoManager";
import SavedArtManager from "../modules/SavedArtManager";
//import ArtCards from "./art/ArtCards";
//import ArtDetails from "./art/ArtDetails"; 
import BrowseExternalArt from "./external-API-art/BrowseExternalArt";
//import Login from "./authentication/Login";
//import LoginForm from "./authentication/LoginForm";
import MySavedArt from "./user-lists/MySavedArt" 
//import SavedArtDetails.js from "./user-lists/SavedArtDetails"

export default class ApplicationViews extends Component {
  //set initial state
  state = {
    art: [],
    savedArt: [],
    userId: 1
  };

  //authentication

  componentDidMount() {
    ExternalArtManager.getAll().then(allArt => {
      this.setState({
        art: allArt
      })
    })

    SavedArtManager.getAll().then(savedArt => {
      this.setState({
        savedArt: savedArt
      })
    })
  }

  //add to list function - button function
  addToList = (userId, title) => SavedArtManager.postToVisit(userId, title)
    .then(() => SavedArtManager.getAll())
    .then(artItems => this.setState({
      savedArt: artItems})
    )
  //update list function
  //submit rating function

  render() {
    return(
      <React.Fragment>
        <Route path="/browse" render={(props) => {
          return <BrowseExternalArt {...props} 
          art={this.state.art}
          addToList={this.addToList}
          userId={this.state.userId}  />
        }} />

        <Route path="/lists" render={(props) => {
          return <MySavedArt {...props}
/*           art={this.state.art} */
          savedArt={this.state.savedArt} />
        }} />

      </React.Fragment>
    )
  }
}