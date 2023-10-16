import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-rocketmovies-0eik.onrender.com/'
})