import { handleResponse } from "./utils";

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

export function request(point, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(`${config.baseUrl}${point}`, options).then(handleResponse);
}

const getNomoreparties = async (point) => {
  return await request(point, {
    headers: config.headers,
  });
};

const patchNomoreparties = async (point, body) => {
  return request(point, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(body),
  });
};

const postNomoreparties = async (point, body) => {
  return request(point, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(body),
  });
};

const deleteNomoreparties = async (point, id) => {
  return request(`${point}${id}`, {
    method: "DELETE",
    headers: {
      authorization: key,
    },
  });
};

const putNomoreparties = async (point, id) => {
  return request(`${point}${id}`, {
    method: "PUT",
    headers: {
      authorization: key,
    },
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
