import BaseApi from "../frontend/utils/api";
import { validateTwoFactor } from "@/utils/validators/validatorLogin";

/*
  @name : LMS-193 로그인, 2FA > 문자, 특수문자 validation
  */

const handleTwoFactorApi = async (sixDigit, userId) => {
  try {
    const errorMessage = validateTwoFactor(sixDigit, userId);
    if (errorMessage) return { data: { error: errorMessage } };

    const res = await BaseApi.post("/api/v1/auth/twoFactor", { sixDigit, userId });
    return res;
  } catch (err) {
    return err.response;
  }
};

export { handleTwoFactorApi };
