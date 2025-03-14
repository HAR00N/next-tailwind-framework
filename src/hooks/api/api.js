import axios from "axios";

const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL || "https://api.example.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login"; // 인증 실패 시 로그인 페이지로 리디렉션
    }
    return Promise.reject(error);
  },
);

export default api;
