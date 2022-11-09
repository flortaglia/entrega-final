const axios = require("axios")  ;

const instance = axios.create({ baseURL: "http://localhost:8080/api/productos" });

// instance.defaults.withCredentials = true; PARA RECIBIR COOKIES

module.exports= instance;
