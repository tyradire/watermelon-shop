import { BASE_URL } from './consts';

export const register = ( email, password, role ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, role })
  })
  .then((response) => {
    return checkResponse(response);
  })
}

export const authorize = ( email, password ) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then((response) => {
    return checkResponse(response);
  })
}

export const getToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    } 
  })
  .then((response) => {
    return checkResponse(response);
  })
}

const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response);
}