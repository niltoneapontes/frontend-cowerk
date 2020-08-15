import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cowerk.herokuapp.com/'
})

export default api;
