import React, { Component } from "react";
import { Route } from "react-router-dom";
//import LoginManager from "../modules/LoginManager";
//import Login from "./authentication/Login";
//import LoginForm from "./authentication/LoginForm";
import LandingPage from "./LandingPage"
import ExternalArtManager from "../modules/ExternalArtManager";
import BrowseExternalArt from "./external-API-art/BrowseExternalArt";
//import ExternalArtDetails from "./external-API-art/ExternalArtDetails"
import SavedArtManager from "../modules/SavedArtManager";
import MySavedArt from "./user-lists/MySavedArt" 
//import SavedArtDetails from "./user-lists/SavedArtDetails"
//import PhotoManager from "../modules/PhotoManager";

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

  //add to list - button function on /browse
  addToList = (userId, title) => SavedArtManager.postToVisit(userId, title)
    .then(() => SavedArtManager.getAll())
    .then(artItems => this.setState({
      savedArt: artItems})
    )

  //update list - button function on /lists
  updateList = (savedArtId, visitedArt) => {
    return SavedArtManager.editToVisit(savedArtId, visitedArt)
    .then(() => SavedArtManager.getAll())
    .then(allSavedArt => {
      let haveVisited = allSavedArt.filter(art => {
        return art.visited === false
      })
      this.setState({
        art: haveVisited
      })
    })
  }

  //delete from list - button function on /lists

  render() {
    return(
      <React.Fragment>
        {/* <Route path="/" render={(props) => {
          return <Redirect to="/home" />
        }} /> */}

        <Route path="/home" render={(props) => {
          return <LandingPage {...props} />
        }} />

        <Route path="/browse" render={(props) => {
          return <BrowseExternalArt {...props} 
          art={this.state.art}
          addToList={this.addToList}
          userId={this.state.userId}  />
        }} />

        <Route path="/lists" render={(props) => {
          return <MySavedArt {...props}
/*           art={this.state.art} */
          savedArt={this.state.savedArt}
          updateList={this.updateList} />
        }} />

      </React.Fragment>
    )
  }
}