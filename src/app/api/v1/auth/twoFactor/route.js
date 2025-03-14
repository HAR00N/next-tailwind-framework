import { ProxyApi } from "@/hooks/proxy/utils/api";
import { apiHandler } from "@/utils/helpers/apiHandler.js";

/*
  @name : LMS-72 공통항목설정 > 2FA Proxy 설정
  @param {Number} id
  @param {Number} sixDigit
  @returns {res} Next js 전용 response json data
*/

const twoFactor = async (req) => {
  const { userId, sixDigit } = await req.json();
  return await ProxyApi.post("/api/v1/auth/twoFactor", { id: userId, sixDigit: sixDigit });
};

export const POST = apiHandler(twoFactor);
