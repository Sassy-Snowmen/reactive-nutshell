// author: Michelle Johnson
const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/articles?_sort=timestamp&_order=desc`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/articles/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newArticle) {
    return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    }).then(data => data.json())
  },
  update(editedArticle) {
    return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArticle)
    }).then(data => data.json());
  },
  searchUser(email){
    return fetch(`${remoteURL}/users?q=${email}`)
    .then(data => data.json());
  },
  postNewUser(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
  },
  getRegisteredUser(email) {
    return fetch(`${remoteURL}/users?email=${email}`)
      .then(data => data.json())
  }
}