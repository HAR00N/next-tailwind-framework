import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import LoadingSpinner from "@/components/ui/LoadingSpinner.jsx";

export function TableBody({ headers, items, loading }) {
  if (loading) {
    return (
      <tbody className={"bg-background"}>
        <tr>
          <td colSpan={headers.length} className={"border-b-borderColor place-items-center border-b p-10"}>
            <LoadingSpinner />
          </td>
        </tr>
      </tbody>
    );
  }

  if (items.length === 0) {
    return (
      <tbody className={"bg-background"}>
        <tr>
          <td colSpan={headers.length} className={"border-b-borderColor place-items-center border-b p-10"}>
            <div className={"flex items-center gap-2"}>
              <Icon icon={"solar:sad-circle-bold-duotone"} height={30} />
              <p>데이터가 없습니다</p>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className={"bg-background"}>
      {items.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {headers.map((header, cellIndex) => (
            <td
              key={cellIndex}
              className={`px-6 py-2 text-center text-sm font-normal ${
                rowIndex !== items.length - 1 ? "border-b-borderColor border-b" : ""
              } ${cellIndex !== headers.length - 1 ? "border-r-borderColor border-r-2" : ""}`}
            >
              {typeof row[header.key] === "function" ? row[header.key](row, rowIndex) : row[header.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  headers: PropTypes.array,
  items: PropTypes.array,
  loading: PropTypes.bool,
};
