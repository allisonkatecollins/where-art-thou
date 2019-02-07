//fetch call to get saved art for a specific user
const remoteURL = "http://localhost:5002"

export default {
  //access savedArt database
  getAll() {
    return fetch(`${remoteURL}/savedArt`).then(res => res.json())
  },
  //add event to list
  postToList(savedArt) {
    return fetch(`${remoteURL}/savedArt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(savedArt)
    }).then(data => data.json())
  }
}