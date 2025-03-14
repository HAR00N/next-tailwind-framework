import { NextResponse } from "next/server";
import { ProxyApi, ProxySelectApi } from "@/hooks/proxy/utils/api";
import { apiHandler } from "@/utils/helpers/apiHandler.js";

export async function GET() {
  return NextResponse.json({ message: "Organizations API is working!" });
}

/*
  @name : LMS-72 공통항목설정 > 조직관리 Proxy 설정
  @param {String} searchKeyword
  @param {Number} page
  @param {Number} rowsPerPage
  @returns {res} Next js 전용 response json data
*/

const organizationsList = async (req) => {
  const { searchKeyword, page, rowsPerPage } = await req.json();
  return await ProxySelectApi.post("/api/v1/organizations/list", { searchKeyword, page, rowsPerPage });
};

export const POST = apiHandler(organizationsList);
