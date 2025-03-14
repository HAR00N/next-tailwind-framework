import BaseApi from "@/hooks/frontend/utils/api.js";
import dayjs from "dayjs";
import Image from "next/image.js";
import * as React from "react";
import { Button, Chip } from "@mui/material";

const handleLmsApi = async (licenseName, page, rowsPerPage) => {
  try {
    const param = { licenseName, page, rowsPerPage };
    const res = await BaseApi.post("/api/v1/lms/license/list", param);

    const result = res.data.result;
    if (!Array.isArray(result)) return { result: [], count: 0 };

    result.forEach((item) => {
      const apiKeyChip = item.apiKey ? { label: "등록", color: "success" } : { label: "미등록" };
      item._apiKey = <Chip size="medium" label={apiKeyChip.label} color={apiKeyChip.color} />;

      let statusChip = { label: "비활성화" };
      if (item.isArchive) statusChip = { label: "아카이빙", color: "error" };
      else if (item.isActive) statusChip = { label: "활성화", color: "success" };

      item._licenseStatus = <Chip size="medium" label={statusChip.label} color={statusChip.color} />;

      item._licenseStartDate = item.licenseStartDate ? dayjs(item.licenseStartDate).format("YYYY-MM-DD") : "-";
      item._licenseExpireDate = item.licenseExpireDate ? dayjs(item.licenseExpireDate).format("YYYY-MM-DD") : "-";
      item._licenseUUID = (
        <Button variant="outlined" color="inherit" size="small">
          상세
        </Button>
      );
      item._manage = <Image src="/images/icons/edit.svg" alt="billing" height={24} width={24} />;
    });

    return { result, count: res.data.count };
  } catch (e) {
    console.error(e);
    return { result: [], count: 0 };
  }
};

export { handleLmsApi };
