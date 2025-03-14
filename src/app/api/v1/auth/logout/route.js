import { ProxyApi } from "@/hooks/proxy/utils/api.js";
import { NextResponse } from "next/server.js";
import { apiHandler } from "@/utils/helpers/apiHandler.js";

const logout = async (req) => {
  return await ProxyApi.post("/api/v1/auth/logout");
};

export const POST = apiHandler(logout);
