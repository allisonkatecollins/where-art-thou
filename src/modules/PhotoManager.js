const remoteURL = "http://localhost:5002"

export default {
  getAllPhotos() {
    return fetch(`${remoteURL}/photos`)
    .then(response => response.json())
  },
  getOnePhoto(title) {
    return fetch(`${remoteURL}/photos/?title=${title}`)
    .then(response => response.json())
  }
}