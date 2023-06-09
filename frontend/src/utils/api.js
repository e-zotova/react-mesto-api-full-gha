const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

class Api {
  constructor(config) {
    this._headers = config.headers;
    this._baseUrl = config.baseUrl;
    this._id = config._id;
  }

  _getJwt() {
    return localStorage.getItem('jwt');
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }

  setUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(handleResponse);
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
      body: JSON.stringify(data),
    }).then(handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
      body: JSON.stringify(data),
    }).then(handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.ezotova.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
