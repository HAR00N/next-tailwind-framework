import BaseApi from "@/hooks/frontend/utils/api.js";

const handleLogoutApi = async () => {
  try {
    return await BaseApi.post("/api/v1/auth/logout");
  } catch (e) {
    return e.response;
  }
};

export default handleLogoutApi;
