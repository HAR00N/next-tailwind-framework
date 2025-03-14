import PropTypes from "prop-types";
import { TableBody } from "@/components/ui/table/TableBody.jsx";
import TableHeader from "@/components/ui/table/TableHeader.jsx";
import Pagination from "@/components/ui/Pagination.jsx";

export default function BaseTable({
  headers,
  items = [],
  loading = false,
  totalCount,
  rowsPerPage = 10,
  page,
  setPage,
}) {
  // const headerWidth = headers.map((header) => header?.width); // TODO

  return (
    <div className={"flex flex-col gap-6"}>
      <div className="overflow-x-auto rounded-lg shadow-md dark:shadow-white/8">
        <table className="w-full text-sm">
          {/*TODO*/}
          <colgroup>
            <col style={{ width: "auto" }} />
          </colgroup>

          <TableHeader headers={headers} />

          <TableBody headers={headers} items={items} loading={loading} />
        </table>
      </div>

      {!loading && items.length > 0 && (
        <Pagination page={page} rowsPerPage={rowsPerPage} setPage={setPage} totalCount={totalCount} />
      )}
    </div>
  );
}

BaseTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.number,
    }),
  ),
  items: PropTypes.array,
  loading: PropTypes.bool,
};

BaseTable.defaultProps = {
  loading: false,
  items: [],
};
