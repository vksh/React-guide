import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-guide-2346b.firebaseio.com/'
});

export default instance;