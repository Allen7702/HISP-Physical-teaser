import React from "react";

function TableComponent({ data }) {
  const { headers, metaData, rows } = data;
  const uniquePeriods = metaData.dimensions.pe;
  const uniqueData = metaData.dimensions.dx;
  const uniqueOUs = metaData.dimensions.ou.filter((ou) => ou !== "pe"); // remove pe from ou

  const getColumnValues = (ou, period) => {
    return uniqueData.map((data) => {
      const matchingRow = rows.find(
        (row) => row[0] === data && row[1] === ou && row[2] === period
      );
      return matchingRow ? matchingRow[3] : "-";
    });
  };

  return (
    <table className="table-auto border  border-collapse mx-10 bg-gray-200">
      <thead>
        <tr>
          <th rowspan="2" className="border px-4 py-2"></th>
          {uniqueOUs.map((ou, index) => (
            <th
              key={index}
              className="border px-4 py-2"
              colSpan={uniqueData.length}
            >
              {metaData.items[ou].name}
            </th>
          ))}
        </tr>
        <tr>
          {uniqueOUs.map((ou, index) => (
            <React.Fragment key={index}>
              {uniqueData.map((data, idx) => (
                <th key={idx} className="border px-4 py-2">
                  {metaData.items[data].name}
                </th>
              ))}
            </React.Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {uniquePeriods.map((period) => (
          <tr key={period}>
            <td className="border px-4 py-2">{metaData.items[period].name}</td>
            {uniqueOUs.map((ou, index) => (
              <React.Fragment key={index}>
                {getColumnValues(ou, period).map((value, idx) => (
                  <td key={idx} className="border px-4 py-2">
                    {value}
                  </td>
                ))}
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
