import validationFormat from "../formatters/validation";

const validateOrganization = (organizationName) => {
  const errors = [
    { condition: validationFormat.isEmpty(organizationName), message: "조직명은 공백이 될 수 없습니다.", code: "" },
  ];

  // 첫 번째 에러 메시지 반환 (없으면 null)
  return errors.find((error) => error.condition)?.message || null;
};

export { validateOrganization };
