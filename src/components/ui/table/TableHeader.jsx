import PropTypes from "prop-types";

export default function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th
            key={i}
            className={`bg-surface border-b-borderColor border-b-3 px-6 py-3 text-center font-semibold ${
              i !== headers.length - 1 ? "border-r-borderColor border-r-2" : ""
            }`}
            style={{ fontSize: "15px" }}
          >
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  headers: PropTypes.array,
};
