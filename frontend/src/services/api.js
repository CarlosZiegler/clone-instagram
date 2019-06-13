import axios from 'axios';

//criando minha conexao com api com URL base
const api =  axios.create({
    baseURL: 'http://localhost:3333',
});
export default api;