const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/articles`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/articles/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}