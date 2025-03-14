import { Icon } from "@iconify/react";

const Pagination = ({ totalCount, rowsPerPage = 10, page, setPage }) => {
  const totalPages = Math.ceil(totalCount / rowsPerPage);
  const size = 5; // ✅ 한 그룹당 보여줄 페이지 개수
  const totalGroups = Math.ceil(totalPages / size);
  const currentGroup = Math.ceil(page / size);

  const getPageNumbers = () => {
    const startPage = (currentGroup - 1) * size + 1;
    const endPage = Math.min(startPage + size - 1, totalPages);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const prevGroup = () => {
    if (currentGroup > 1) {
      setPage((currentGroup - 2) * size + 1); // 이전 그룹의 첫 페이지로 이동
    }
  };

  const nextGroup = () => {
    if (currentGroup < totalGroups) {
      setPage(currentGroup * size + 1); // 다음 그룹의 첫 페이지로 이동
    }
  };

  return (
    <div className="pagination flex items-center justify-center gap-2">
      <button onClick={prevGroup} disabled={currentGroup === 1} className="rounded p-1 disabled:opacity-30">
        <Icon icon={"mdi:chevron-double-left"} height={24} />
      </button>

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="rounded p-1 disabled:opacity-30"
      >
        <Icon icon={"mdi:chevron-left"} height={24} />
      </button>

      {getPageNumbers().map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${page === num ? "bg-primary text-white" : ""}`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="rounded p-1 disabled:opacity-30"
      >
        <Icon icon={"mdi:chevron-right"} height={24} />
      </button>

      <button onClick={nextGroup} disabled={currentGroup === totalGroups} className="p-1 disabled:opacity-30">
        <Icon icon={"mdi:chevron-double-right"} height={24} />
      </button>
    </div>
  );
};

export default Pagination;
