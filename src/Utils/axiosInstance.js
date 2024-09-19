import axios from "axios";

const instance = axios.create({
    baseURL: 'https://my-gear.onrender.com',

});

export default instance