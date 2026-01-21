import axios from "axios";

const API = "http://localhost:5000/auth";

export const authService = {
    register(data: any) {
        return axios.post(`${API}/register`, data);
    },
    login(data: any) {
        return axios.post(`${API}/login`, data);
    },
};