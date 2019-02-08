import React, { Component } from "react";
import { Route } from "react-router-dom";
import ExternalArtManager from "../modules/ExternalArtManager";
//import LoginManager from "../modules/LoginManager";
//import PhotoManager from "../modules/PhotoManager";
import SavedArtManager from "../modules/SavedArtManager";
//import ArtCards from "./art/ArtCards";
//import ArtDetails from "./art/ArtDetails"; 
import ArtList from "./art/ArtList";
//import Login from "./authentication/Login";
//import LoginForm from "./authentication/LoginForm";
//import HaveVisitedDetails from "./user-lists/have-visited/HaveVisitedDetails";
//import HaveVisitedList from "./user-lists/have-visited/HaveVisitedList";
//import ToVisitDetails from "./user-lists/to-visit/ToVisitDetails";
//import ToVisitList from "./user-lists/to-visit/ToVisitList";
import MySavedArt from "./user-lists/MySavedArt" 

export default class ApplicationViews extends Component {
  //set initial state
  state = {
    art: [],
    savedArt: []
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

  //add to list function
  addToList = (art) => SavedArtManager.postToList(art)
    .then(() => SavedArtManager.getAll())
    .then(artItems => this.setState({
      art: artItems
    })
    )
  //update list function
  //submit rating function

  render() {
    return(
      <React.Fragment>
        <Route path="/browse" render={(props) => {
          return <ArtList {...props} 
          art={this.state.art}
          addToList={this.addToList}  />
        }} />

        <Route path="/lists" render={(props) => {
          return <MySavedArt {...props}
          art={this.state.art}
          savedArt={this.state.savedArt} />
        }} />

      </React.Fragment>
    )
  }
}