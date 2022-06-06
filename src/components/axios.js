import axios from "axios";

const instance = axios.create({
    baseURL:"https://tiktok-copy.herokuapp.com/",
});

export default instance;