import axios from "axios";

const BaseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL || "http://localhost:3000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// 요청 인터셉터
BaseApi.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 응답 인터셉터
BaseApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      alert(`${error.response?.data?.message || "로그인이 만료되었습니다. 다시 로그인해주세요."}`);
      window.location.href = "/logout";
    }
    return Promise.reject(error);
  },
);

export default BaseApi;
