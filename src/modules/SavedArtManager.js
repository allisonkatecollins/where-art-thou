//fetch call to get saved art for a specific user
const remoteURL = "http://localhost:5002"

export default {
  //access savedArt database
  getAll() {
    return fetch(`${remoteURL}/savedArt`).then(res => res.json())
  },
  //add art to "To Visit" list
  postToVisit(toVisit) {
    return fetch(`${remoteURL}/savedArt?visited=false`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(toVisit)
    }).then(data => data.json())
  },
  //add art to "Have Visited" list
}