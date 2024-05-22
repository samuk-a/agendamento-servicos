import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export const handleSetToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;