import axios from 'axios';
import { BASE_URL } from '@/enums';

const instance = axios.create({ baseURL: BASE_URL });

export default instance;
