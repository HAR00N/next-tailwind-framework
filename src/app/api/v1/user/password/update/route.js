import { ProxyApi } from "@/hooks/proxy/utils/api";
import { apiHandler } from "@/utils/helpers/apiHandler.js";

/*
  @name :
  @param {Object} req
  @returns {res} Next js 전용 response json data
*/

const updatePassword = async (req) => {
  const { password, newPassword } = await req.json();
  return await ProxyApi.post("/api/v1/user/password/update", { password, newPassword });
};

export const POST = apiHandler(updatePassword);
