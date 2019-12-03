const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(result => result.json())
  }
}