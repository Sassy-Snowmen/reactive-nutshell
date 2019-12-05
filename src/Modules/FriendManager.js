// author: Michelle Johnson
const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/friends/${id}?_expand=user`).then(result => result.json())
  },
  getAll() {
    // const user = localStorage.getItem("credentials")
    // const userId = parseInt(user)
    const userId = JSON.parse(localStorage.getItem("credentials"))
    return fetch(`${remoteURL}/friends?userId=${userId.id}&_expand=user`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/friends/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  }
}