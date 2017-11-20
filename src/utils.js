import axios from 'axios'

export const getUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
}
