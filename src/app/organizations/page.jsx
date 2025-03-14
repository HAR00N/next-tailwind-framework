"use client";

import Layout from "@/components/layout/AppLayout.jsx";
import Spacer from "@/components/ui/Spacer.jsx";
import { Icon } from "@iconify/react";
import Table from "@/components/base/BaseTable.jsx";
import Input from "@/components/base/BaseInput.jsx";
import Button from "@/components/base/BaseButton.jsx";
import { useEffect, useState } from "react";
import OrganizationRegisterDialog from "@/components/modals/organizations/OrganizationRegisterDialog.jsx";
import { OrganizationHeader } from "@/assets/data/headers.js";
import Chip from "@/components/ui/Chip.jsx";

export default function Organizations() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleClickPlay = (row) => {
    console.log("play");
    console.log("row:", row);
  };
  const handleClickEdit = (row) => {
    console.log("Edit");
    console.log("row:", row);
  };
  const handleClickUUID = (row) => {
    console.log("UUID");
    console.log("row:", row);
  };
  const handlePagination = (pageNumber) => {
    if (page === pageNumber) return;
    setPage(pageNumber);
  };
  const handleClickRegister = () => {
    console.log(searchKeyword);
    setOpen(true);
  };

  const tableHeaders = OrganizationHeader();
  const tableItems = [
    {
      no: 1,
      licenseName: "Eq4All",
      startDate: "2017-11-08",
      endDate: "2022-11-08",
      licenseUUID: "1234-5678",
      _licenseUUID: (row, index) => (
        <p onClick={() => handleClickUUID(row)} className={"cursor-pointer text-blue-600"}>
          [{index}] 1234-5678
        </p>
      ),
      licenseStatus: "활성화",
      _licenseStatus: (row, index) => <Chip>{row.licenseStatus}</Chip>,
      apiKey: "d****f",
      apiStatus: "활성화",
      productName: "wa-api",
      manage: (row, rowIndex) => (
        <div className="flex items-center justify-center gap-2">
          <Icon
            onClick={() => handleClickPlay(row)}
            icon={"solar:play-line-duotone"}
            height={24}
            className={"cursor-pointer text-red-400"}
          />
          <Icon
            onClick={() => handleClickEdit(row)}
            icon={"mdi:square-edit-outline"}
            height={24}
            className={"cursor-pointer text-green-300"}
          />
        </div>
      ),
    },
    {
      no: 2,
      licenseName: "TestLicense",
      startDate: "2020-01-01",
      endDate: "2025-01-01",
      licenseUUID: "8765-4321",
      _licenseUUID: (row, index) => (
        <p onClick={() => handleClickUUID(row)} className={"cursor-pointer text-blue-600"}>
          [{index}] 1234-5678
        </p>
      ),
      licenseStatus: "비활성화",
      _licenseStatus: (row, index) => <Chip color={"error"}>{row.licenseStatus}</Chip>,
      apiKey: "a****b",
      apiStatus: "비활성화",
      productName: "test-api",
      manage: (row, index) => (
        <div className="flex items-center justify-center gap-2">
          <Icon
            onClick={() => handleClickPlay(row)}
            icon={"solar:play-line-duotone"}
            height={24}
            className={"cursor-pointer text-red-400"}
          />
          <Icon
            onClick={() => handleClickEdit(row)}
            icon={"mdi:square-edit-outline"}
            height={24}
            className={"cursor-pointer text-green-300"}
          />
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className={"bg-background w-full rounded-lg p-6"}>
        <h4 className="mb-10 text-xl font-semibold">조직 목록</h4>

        <div className={"mb-10 flex"}>
          <Input
            placeholder="조직명을 입력해주세요"
            onChange={setSearchKeyword}
            onEnter={handleClick}
            icon={"mdi:magnify"}
            onClickIcon={handleClick}
          />

          <Spacer />
          <Button onClick={handleClickRegister} icon={"mdi:plus"} color={"primary"}>
            등록
          </Button>
        </div>

        <Table
          headers={tableHeaders}
          items={tableItems}
          loading={loading}
          page={page}
          rowsPerPage={10}
          setPage={handlePagination}
          totalCount={2}
        />
      </div>

      <OrganizationRegisterDialog open={open} onClose={() => setOpen(false)} />
    </Layout>
  );
}
