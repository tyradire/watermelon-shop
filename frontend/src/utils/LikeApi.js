import { BASE_URL } from './consts';

export const addLike = (id) => {
  return fetch(`${BASE_URL}/addlike/`+ id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('jwt'),
    }
  })
  .then((response) => {
    return checkResponse(response);
  })
}

const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response);
}