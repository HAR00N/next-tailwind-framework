import validationFormat from "../formatters/validation";

const validateLogin = (username, password) => {
  const errors = [
    {
      condition: validationFormat.isEmpty(username),
      message: "아이디를 입력해주세요",
      code: "LOGINERR001",
    },
    {
      condition: !validationFormat.isAlphanumeric(username),
      message: "아이디엔 영문과 숫자만 입력할 수 있습니다",
      code: "LOGINERR002",
    },
    {
      condition: validationFormat.isEmpty(password),
      message: "패스워드를 입력해주세요",
      code: "LOGINERR003",
    },
    {
      condition: validationFormat.isValidLength(password, 0, 3),
      message: "패스워드가 너무 짧습니다",
      code: "LOGINERR004",
    },
  ];

  // 첫 번째 에러 메시지 반환 (없으면 null)
  return errors.find((error) => error.condition)?.message || null;
};

const validateTwoFactor = (sixDigit, userId) => {
  const errors = [
    { condition: validationFormat.isEmptyNumber(sixDigit), message: "2차인증을 해주세요.", code: "2FAERR001" },
    { condition: !validationFormat.isNumeric(sixDigit), message: "2차인증을 해주세요.", code: "2FAERR002" },
    { condition: validationFormat.isValidLength(sixDigit, 0, 6), message: "2차인증을 해주세요.", code: "2FAERR003" },
    { condition: validationFormat.isEmptyNumber(userId), message: "2차인증을 해주세요.", code: "2FAERR004" },
    { condition: !validationFormat.isNumeric(userId), message: "2차인증을 해주세요.", code: "2FAERR005" },
  ];

  // 첫 번째 에러 메시지 반환 (없으면 null)
  return errors.find((error) => error.condition)?.message || null;
};

export { validateLogin, validateTwoFactor };
