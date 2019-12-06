const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
  },
  getAll() {
    const userId = JSON.parse(localStorage.getItem("credentials"))

    // const user = localStorage.getItem("credentials")
    // const userId = parseInt(user)
    return fetch(`${remoteURL}/messages?userId=${userId.id}&_sort=timestamp&_order=desc`).then(result => result.json())
  },
  post(newMessage) {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(data => data.json())
}
}