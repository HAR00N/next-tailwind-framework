import { NextResponse } from "next/server";
import { ProxySelectApi } from "@/hooks/proxy/utils/api";

export async function GET() {
  return NextResponse.json({ message: "Organizations API is working!" });
}

/*
  @name : LMS-72 공통항목설정 > Character Proxy 설정
  @param {String} searchKeyword
  @param {Number} page
  @param {Number} rowsPerPage
  @returns {res} Next js 전용 response json data
*/

export async function POST(req) {
  try {
    // ✅ 요청 본문 파싱

    const { searchKeyword, page, rowsPerPage } = await req.json();

    const res = await ProxySelectApi.post("/api/v1/characters/list", { searchKeyword, page, rowsPerPage });
    return NextResponse.json(res.data);
  } catch (error) {
    console.error("📌 서버 오류:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
