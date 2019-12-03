const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/friends/${id}?_expand=user`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/friends?_expand=user`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/friends/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}