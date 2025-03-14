import { NextResponse } from "next/server";
import { ProxyApi } from "@/hooks/proxy/utils/api";

export async function GET() {
  return NextResponse.json({ message: "Organizations API is working!" });
}

/*
  @name : LMS-72 공통항목설정 > 관리자관리/이용자관리 등록 Proxy 설정
  @param {Number} organizationId
  @param {String} userAccount
  @param {String} userName
  @param {String} userEmail
  @param {Number} userRoleId true: 관리자 // false : 이용자
  @returns {res} Next js 전용 response json data
*/

export async function POST(req) {
  try {
    const { organizationId, userAccount, userName, userEmail, userRoleId } = await req.json();
    const res = await ProxyApi.post("/api/v1/user/register", {
      organizationId,
      userAccount,
      userName,
      userEmail,
      userRoleId,
    });
    return NextResponse.json(res.data);
  } catch (error) {
    console.error("📌 서버 오류:", error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}
