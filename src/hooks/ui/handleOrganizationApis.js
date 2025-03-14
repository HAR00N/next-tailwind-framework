import BaseApi from "../frontend/utils/api";
import { validateOrganization } from "@/utils/validators/validatorOrganization";

const handleOrganizationListApi = async (query, page, rowsPerPage) => {
  try {
    const param = { searchKeyword: query, page, rowsPerPage };
    const res = await BaseApi.post("/api/v1/organizations/list", param);
    const data = Array.isArray(res.data.result) ? res.data.result : [];
    return {
      organizationData: data,
      organizationInfo: data.length > 0 ? data[0] : {},
      managerId: data.length > 0 ? data[0].id : 0,
    };
  } catch (err) {
    return {
      organizationData: [],
      organizationInfo: {},
      managerId: 0,
    };
  }
};

const handleOrganizationRegisterApi = async (organizationName) => {
  try {
    const errorMessage = validateOrganization(organizationName);
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    const res = await BaseApi.post("/api/v1/organizations/register", { organizationName: organizationName });
    return res;
  } catch (err) {
    return err.response;
  }
};

export { handleOrganizationListApi, handleOrganizationRegisterApi };
