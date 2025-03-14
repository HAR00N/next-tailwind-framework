import BaseApi from "../frontend/utils/api";
import { validateLogin } from "@/utils/validators/validatorLogin";

/*
  @name : LMS-200 로그인,2FA > 로그인 시 아이디 한글, 특수문자 제외 validation
  @name : LMS-190 로그인,2FA > 로그인 에러메세지 > errorMessage alert
  ? LMS-200 테스트 후 추가 여부 결정

  */

const handleLoginApi = async (userAccount, password) => {
  try {
    const errorMessage = validateLogin(userAccount, password);
    if (errorMessage) return { data: { error: errorMessage } };

    const res = await BaseApi.post("/api/v1/auth/login", { userAccount, password });
    return res;
  } catch (err) {
    return err.response;
  }
};

export { handleLoginApi };
