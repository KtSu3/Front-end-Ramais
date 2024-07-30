import axios from 'axios';

const api = axios.create({

    baseURL: 'http://ramaisapi.yukalinetelecom.com.br/api/ramais/',

})
export default api;