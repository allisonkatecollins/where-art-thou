const remoteURL = "http://localhost:5002"

export default {
  getUsers() {
    return fetch(`${remoteURL}/users`).then(res => res.json())
  },

  registerUser(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
  },

  findUser(username, password) {
    return fetch(`${remoteURL}/users?username=${username}&password=${password}`)
      .then(res => res.json())
      
  }
}