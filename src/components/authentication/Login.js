import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  //record changes to input fields and set state
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    console.log("state:", this.state)
  }

  //get user by username and password
  //alert message if user doesn't exist within database
  //if username and password do exist in database, session storage is set and user is sent to /home
  onLogin = (evt) => {
    console.log("login pushed")
    evt.preventDefault();
    this.props.verifyUser(this.state.username, this.state.password)
    //currently alert pops up no matter what the user input is
      /* if(this.props.users.length < 1) {
        alert("We can't seem to find you! Try registering below")
      } else { */
        this.props.users.forEach(user => {
            let loggedIn= false;
            if (this.state.username === user.username && this.state.password === user.password) {
                    loggedIn= true;
                }
            if (loggedIn === true)
            { 
            console.log("userId:", user.id)
            sessionStorage.setItem("User", user.id);
            this.props.history.push("/home");
            }
        })
   /*  } */
    
    /* .then(user => {
        console.log("userArray:", user)
        if (user.length === 0) {
          alert("You must be new - please register below!")
        } else { 
          user.forEach(uz => {
            console.log("user:", user)
            let loggedIn = false;
            if (this.state.username === uz.username && this.state.password === uz.password) {
              loggedIn = true;
            }
            if (loggedIn === true) {
              sessionStorage.setItem("User", uz.id)
              let sessionUser = sessionStorage.getItem("User")
              console.log("sessionUser:", sessionUser)
              this.props.history.push("/home")
            }
          })
       }
      }) */
  }
  render() {
    return (
      <React.Fragment>
        <h2>LOGIN</h2>
        <div>
          <form>
            <div>
              <label htmlFor="Username">
                Username:
              </label>
                <input type="text" required onChange={this.handleFieldChange}
                       id="username"
                       placeholder="username" />
            </div>
            <div>
              <label htmlFor="Password">
                Password:
              </label>
                <input type="password" required onChange={this.handleFieldChange}
                       id="password"
                       placeholder="password" />
            </div>
            <div>
              <button type="submit" onClick={this.onLogin} >
              LOGIN
              </button>
              <p><Link to="/register">Register Here</Link></p>
            </div>
          </form>
        </div> 
      </React.Fragment>
    )
  }
}