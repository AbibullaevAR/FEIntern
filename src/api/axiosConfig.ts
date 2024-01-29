import axios from 'axios';

const instance = axios.create({ baseURL: 'https://test-front.framework.team' });

export default instance;
