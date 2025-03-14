const key = "564003e5-ae42-4237-b04a-556ce8c54f95";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-33/",
  headers: {
    authorization: key,
    "Content-Type": "application/json",
  },
};

const path = {
  cards: "cards/",
  usersMe: "users/me/",
  usersMe: "users/me/",
  likes: "likes/",
  avatar: "avatar",
};

const getNomoreparties = async (point) => {
  return await fetch(`${config.baseUrl}${point}`, {
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
};

const patchNomoreparties = async (point, body) => {
  return fetch(`${config.baseUrl}${point}`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
};

const postNomoreparties = async (point, body) => {
  return fetch(`${config.baseUrl}${point}`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
};

const deleteNomoreparties = async (point, id) => {
  return fetch(`${config.baseUrl}${point}${id}`, {
    method: "DELETE",
    headers: {
      authorization: key,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
};

const putNomoreparties = async (point, id) => {
  return fetch(`${config.baseUrl}${point}${id}`, {
    method: "PUT",
    headers: {
      authorization: key,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
};

export function setAvatar(link) {
  return patchNomoreparties(`${path.usersMe}${path.avatar}`, link);
}

export function deleteLikeById(id) {
  return deleteNomoreparties(`${path.cards}${path.likes}`, id);
}

export function likeById(id) {
  return putNomoreparties(`${path.cards}${path.likes}`, id);
}

export function deleteCardById(id) {
  return deleteNomoreparties(path.cards, id);
}

export function addCard(body) {
  return postNomoreparties(path.cards, body);
}

export function setProfilrData(body) {
  return patchNomoreparties(path.usersMe, body);
}

export function getCardList() {
  return getNomoreparties(path.cards);
}

export function getProfilrData() {
  return getNomoreparties(path.usersMe);
}
