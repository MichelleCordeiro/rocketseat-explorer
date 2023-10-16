import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovie-api-zd2v.onrender.com'
})