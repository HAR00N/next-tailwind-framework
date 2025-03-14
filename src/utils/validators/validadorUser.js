import validationFormat from "../formatters/validation";

const validateRegisterUser = (organizationId, name, account, email, authority) => {
  const errors = [
    { condition: validationFormat.isNumeric(organizationId), message: "올바른 조직이 아닙니다.", code: "" },
    { condition: validationFormat.isEmpty(name), message: "이름은 공백으로 쓸 수 없습니다.", code: "" },
    { condition: validationFormat.isEmpty(account), message: "아이디는 공백으로 쓸 수 없습니다.", code: "" },
    { condition: validationFormat.isEmpty(email), message: "이메일은 공백으로 쓸 수 없습니다.", code: "" },
    { condition: validationFormat.isEmpty(authority), message: "권한을 공백으로 쓸 수 없습니다.", code: "" },
    { condition: validationFormat.hasKorean(account), message: "아이디는 한글이 포함되지 않습니다.", code: "" },
    { condition: validationFormat.hasKorean(email), message: "이메일은 한글이 포함되지 않습니다.", code: "" },
    { condition: validationFormat.isValidEmail(email), message: "올바른 이메일 형식이 아닙니다.", code: "" },
  ];

  // 첫 번째 에러 메시지 반환 (없으면 null)
  return errors.find((error) => error.condition)?.message || null;
};

export { validateRegisterUser };
