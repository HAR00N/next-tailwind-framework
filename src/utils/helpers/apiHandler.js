import { NextResponse } from "next/server";

/**
 * API Route 공통 핸들러
 * @param {Function} handler - 실행할 API 함수
 */
export const apiHandler = (handler) => async (req) => {
  try {
    const result = await handler(req);
    const response = NextResponse.json(result.data);

    /* server API > frontend API 쿠키 연동 */
    const setCookie = result.headers["set-cookie"];
    if (setCookie) response.headers.set("Set-Cookie", setCookie);

    return response;
  } catch (error) {
    console.error(error);

    const errorStatus = error.response?.status || 500;
    const errorMessage = `[${errorStatus}] ` + `${error.response?.data?.message || "서버 오류 발생"}`;

    /**
     * NextResponse.json은 status가 200~599로 Range가 설정되어있다
     * 따라서 600번대의 커스텀 에러의 경우 500번으로 일단 return 후 메시지에서 확인한다.
     */
    return NextResponse.json({ error: errorMessage }, { status: errorStatus > 599 ? 500 : errorStatus });
  }
};
