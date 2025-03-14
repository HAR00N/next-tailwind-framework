import BaseApi from "../frontend/utils/api";

const handleManagerApi = async (organizationId, searchKeyword, isAdmin, page, rowsPerPage) => {
  try {
    const param = {
      organizationId,
      searchKeyword,
      isAdmin,
      page,
      rowsPerPage,
    };
    const res = await BaseApi.post("/api/v1/management/list", param);
    const data = Array.isArray(res.data.result) ? res.data.result : [];
    return {
      managerData: data,
    };
  } catch (err) {
    return {
      managerData: [],
    };
  }
};

const handleManagerRegisterApi = async (organizationId, name, account, email, authority) => {
  try {
    /*   const errorMessage = validateRegisterManager(organizationId, name, account, email, authority);
            console.log(errorMessage)
            if (errorMessage) {
               
                alert(errorMessage);
                return;
            } */
    const param = {
      organizationId: organizationId,
      userName: name,
      userAccount: account,
      userEmail: email,
      userRoleId: authority,
    };
    const res = await BaseApi.post("/api/v1/management/register", param);
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};

export { handleManagerApi, handleManagerRegisterApi };
