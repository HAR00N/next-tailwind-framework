const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);
const isNumeric = (str) => /^[0-9]+$/.test(str);
const isFloat = (str) => /^-?\d+(\.\d+)?$/.test(str);
const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);
const hasSpecialChar = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhoneNumber = (phone) => /^01[0-9]-\d{3,4}-\d{4}$/.test(phone);
const isValidURL = (url) => /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}.*$/.test(url);
const hasKorean = (str) => /[가-힣]/.test(str);
const isValidLength = (str, min, max) => str.length >= min && str.length <= max;
const hasWhitespace = (str) => /\s/.test(str);
const hasHtmlTags = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

// ✅ 공백(빈 값) 확인 함수 추가
const isEmpty = (str) => {
  return (typeof str !== "string") | (str.trim().length === 0);
};

const isEmptyNumber = (num) => {
  return num === null || num === undefined || isNaN(num);
};

const validationFormat = {
  isAlphabet,
  isNumeric,
  isFloat,
  isAlphanumeric,
  hasSpecialChar,
  isValidEmail,
  isValidPhoneNumber,
  isValidURL,
  hasKorean,
  isValidLength,
  hasWhitespace,
  hasHtmlTags,
  isEmpty, // 추가된 공백 체크 함수
  isEmptyNumber,
};

export default validationFormat;
