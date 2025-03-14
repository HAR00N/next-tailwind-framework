import BaseApi from "@/hooks/frontend/utils/api";

const handleUpdatePasswordApi = async (password, newPassword) => {
  try {
    const errorMessage = null;

    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    const res = await BaseApi.post("/api/v1/user/password/update", { password, newPassword });
    return res;
  } catch (e) {
    return e.response;
  }
};

export { handleUpdatePasswordApi };
