import React, { Component } from "react"

export default class Registration extends Component {
  state ={
    name: "",
    username: "",
    password: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  getAllUsers = evt => {
    evt.preventDefault();
    this.props.getUsers().then(allUsers => {
      let usersArray = allUsers.filter(user => {
        console.log("registration:", user.username, this.state.username)
        return (user.username === this.state.username)
      })
      if (usersArray.length > 0) {
        alert("This username is taken, try again please!")
      } else {
        alert(`Welcome, ${this.state.name}!`)
        const newUser = {
          name: this.state.name,
          username: this.state.username,
          password: this.state.password
        }
        this.props.postUser(newUser)
          .then(() => {
            this.props.getUsers()
              .then(() => {
                this.props.history.push("/")
              })
          })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>REGISTER</h2>
          <div>
            <form>
              <div>
                <label htmlFor="Name"> Name: </label>
                <input type="text" required onChange={this.handleFieldChange} id="name" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="Username"> Username: </label>
                <input type="text" required onChange={this.handleFieldChange} id="username" placeholder="Username" />
              </div>
              <div>
                <label htmlFor="Password"> Password: </label>
                <input type="password" required onChange={this.handleFieldChange} id="password" />
              </div>
              <div>
                <button type="submit" onClick={this.getAllUsers}>SUBMIT</button>
              </div>
            </form>
          </div>
      </React.Fragment>
    )
  }
}