import BaseApi from "../frontend/utils/api";

const handleCharactersListApi = async (query, page, rowsPerPage) => {
  try {
    const param = { searchKeyword: query, page, rowsPerPage };
    const res = await BaseApi.post("/api/v1/characters/list", param);
    const data = Array.isArray(res.data.result) ? res.data.result : [];
    return {
      charactersData: data,
    };
  } catch (err) {
    return {
      charactersData: [],
    };
  }
};

export { handleCharactersListApi };
