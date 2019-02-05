import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import ExternalArtManager from "../modules/ExternalArtManager";
import LoginManager from "../modules/LoginManager";
import PhotoManager from "../modules/PhotoManager";
import SavedArtManager from "../modules/SavedArtManager";
import ArtCards from "./art/ArtCards";
import ArtDetails from "./art/ArtDetails";
import ArtList from "./art/ArtList";
import Login from "./authentication/Login";
import LoginForm from "./authentication/LoginForm";
import HaveVisitedCards from "./user-lists/have-visited/HaveVisitedCards";
import HaveVisitedDetails from "./user-lists/have-visited/HaveVisitedDetails";
import HaveVisitedList from "./user-lists/have-visited/HaveVisitedList";
import ToVisitCards from "./user-lists/to-visit/ToVisitCards";
import ToVisitDetails from "./user-lists/to-visit/ToVisitDetails";
import ToVisitList from "./user-lists/to-visit/ToVisitList";
import MySavedArt from "./user-lists/MySavedArt"