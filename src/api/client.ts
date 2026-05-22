import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://api.quickpoll.local:5050/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
