import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-9a8a8.firebaseio.com/'
})

export default instance;
