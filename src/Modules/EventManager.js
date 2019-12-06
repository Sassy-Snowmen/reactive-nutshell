const remoteURL = "http://localhost:5002"

export default {

    // Fetch call to get a single event
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
  },

//   Fetch call to get all events

getAll() {
    const user = localStorage.getItem("credentials")
    const userId = parseInt(user)
    return fetch(`${remoteURL}/events?userId=${userId}&_sort=date&_order=asc`).then(result => result.json())
  },

  post(newEvent) {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(data => data.json())
},

delete(id) {
    return fetch(`http://localhost:5002/events/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },

  update(editedEvent) {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  }
}