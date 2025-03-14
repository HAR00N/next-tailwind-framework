import { NextResponse } from "next/server";
import { ProxyApi } from "@/hooks/proxy/utils/api";

export async function GET() {
  return NextResponse.json({ message: "Organizations API is working!" });
}

/*
  @name : LMS-72 공통항목설정 > 조직관리 등록 Proxy 설정
  @param {String} organizationName
  @returns {res} Next js 전용 response json data
*/

export async function POST(req) {
  try {
    const { organizationName } = await req.json();

    const res = await ProxyApi.post("/api/v1/organization/register", { organizationName });
    return NextResponse.json(res.data);
  } catch (error) {
    console.error("📌 서버 오류:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
