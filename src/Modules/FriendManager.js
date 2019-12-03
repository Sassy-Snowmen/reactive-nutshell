const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/friends/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/friends`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/friends/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}