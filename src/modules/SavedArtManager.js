//fetch call to get saved art for a specific user
const remoteURL = "http://localhost:5002"

export default {
  //access savedArt database
  getAll() {
    return fetch(`${remoteURL}/savedArt`).then(res => res.json())
  },

  getVisited() {
    return fetch(`${remoteURL}/savedArt?visited=true`).then(res => res.json())
  },

  //add art to "To Visit" list - button function
  postToVisit(userId, title) {
    return fetch(`${remoteURL}/savedArt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({userId:userId, title:title, rating:0, visited:false})
    }).then(data => data.json()).then(() => (alert("Art added to list!")))
  },
  //add art to "Have Visited" list - button function
  editToVisit(savedArtId, visitedArt) {
    return fetch(`${remoteURL}/savedArt/${savedArtId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(visitedArt)
    }).then(data => data.json())
  },
  //delete art from "To Visit list" - button function
  deleteItem(savedArtId, visitedArt) {
    return fetch(`${remoteURL}/savedArt/${savedArtId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(visitedArt)
    }).then(data => data.json())
  }
}