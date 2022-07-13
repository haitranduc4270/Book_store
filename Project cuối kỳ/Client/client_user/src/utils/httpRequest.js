import axios from "axios";

const request = axios.create({
    baseURL: "https://62c5a3d2134fa108c258756a.mockapi.io/poplibrary/",
});

export default request;
