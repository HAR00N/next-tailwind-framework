import axios from "axios";

const reqInterceptor = async (config) => {
  if (typeof window !== "undefined") return config;

  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  if (cookieStore) config.headers["Cookie"] = cookieStore.toString();
  return config;
};

const ProxyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_WRITE_URL || "http://localhost:8080",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const ProxySelectApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_READ_URL || "http://localhost:9080",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

ProxyApi.interceptors.request.use(async (config) => {
  return await reqInterceptor(config);
});

ProxySelectApi.interceptors.request.use(async (config) => {
  return await reqInterceptor(config);
});

// 요청 인터셉터
export { ProxyApi, ProxySelectApi };
