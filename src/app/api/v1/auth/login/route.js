import { ProxyApi } from "@/hooks/proxy/utils/api";
import { apiHandler } from "@/utils/helpers/apiHandler.js";

/*
  @name : LMS-72 공통항목설정 > Login Proxy 설정
  @param {Object} req
  @returns {res} Next js 전용 response json data
*/
const login = async (req) => {
  const { userAccount, password } = await req.json();
  return await ProxyApi.post("/api/v1/auth/login", { userAccount: userAccount, userPassword: password });
};

export const POST = apiHandler(login);
