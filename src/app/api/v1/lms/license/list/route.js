import { ProxySelectApi } from "@/hooks/proxy/utils/api.js";
import { apiHandler } from "@/utils/helpers/apiHandler.js";

const licenseList = async (req) => {
  const { licenseName, page, rowsPerPage } = await req.json();
  return await ProxySelectApi.post("/api/v1/lms/license/list", { licenseName, page, rowsPerPage });
};

export const POST = apiHandler(licenseList);
