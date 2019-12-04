const remoteURL = "http://localhost:5002"

export default {

    // Fetch call to get a single event
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
  },

//   Fetch call to get all events
  getAll() {
    return fetch(`${remoteURL}/events`).then(result => result.json())
  }
}