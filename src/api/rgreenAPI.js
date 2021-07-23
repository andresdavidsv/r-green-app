import axios from 'axios';

const baseUrl = ' https://r-green-api.vercel.app/api/v1';

const rgreenApi = axios.create({baseUrl});

export default rgreenApi;
