import { NextResponse } from "next/server";
import { ProxySelectApi } from "@/hooks/proxy/utils/api";

export async function GET() {
  return NextResponse.json({ message: "Organizations API is working!" });
}

/*
  @name : LMS-72 공통항목설정 > 관리자관리/이용자관리 Proxy 설정
  @param {Number} organizationId
  @param {String} searchKeyword
  @param {Number} page
  @param {Number} rowsPerPage
  @param {Boolean} isAdmin
  @returns {res} Next js 전용 response json data
*/

export async function POST(req) {
  try {
    const { organizationId, searchKeyword, page, rowsPerPage, isAdmin } = await req.json();

    const res = await ProxySelectApi.post("/api/v1/user/list", {
      organizationId,
      searchKeyword,
      page,
      rowsPerPage,
      isAdmin,
    });
    return NextResponse.json(res.data);
  } catch (error) {
    console.error("📌 서버 오류:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
