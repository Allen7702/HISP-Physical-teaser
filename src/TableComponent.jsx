import React from "react";

function TableComponent({ data }) {
  const { headers, metaData, rows } = data;
  const uniquePeriods = metaData.dimensions.pe;
  const uniqueData = metaData.dimensions.dx;
  const uniqueOUs = metaData.dimensions.ou.filter((ou) => ou !== "pe"); // Exclude "pe" from ou dimensions

  const getColumnValues = (ou, period) => {
    return uniqueData.map((data) => {
      const matchingRow = rows.find(
        (row) => row[0] === data && row[1] === ou && row[2] === period
      );
      return matchingRow ? matchingRow[3] : "-";
    });
  };

  return (
    <table className="table-auto border  border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2"></th>
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
          <th className="border px-4 py-2"></th>
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

// const TableComponent = () => {
//   const { rows, metaData } = jsonData;
//   const uniquePeriods = [...new Set(rows.map((item) => item[2]))];
//   const uniqueData = [...new Set(rows.map((item) => item[0]))];
//   const animalRegionRows = rows.filter((item) => item[1] === "zj9LoeErgkP");
//   const foodRegionRows = rows.filter((item) => item[1] === "gwAcS6gaz7D");

//   return (
//     <table>
//       <caption>Table</caption>
//       <thead>
//         <tr>
//           <th> </th>
//           <th colSpan={uniqueData.length}>Animal Region</th>
//           <th colSpan={uniqueData.length}>Food Region</th>
//         </tr>
//         <tr>
//           <th></th>
//           {uniqueData.map((data, index) => (
//             <th key={index}>{metaData.items[data].name}</th>
//           ))}
//           {uniqueData.map((data, index) => (
//             <th key={index}>{metaData.items[data].name}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {uniquePeriods.map((period) => (
//           <tr key={period}>
//             <td>{metaData.items[period].name}</td>
//             {uniqueData.map((data) => {
//               const animalRegionRow = animalRegionRows.find(
//                 (row) => row[0] === data && row[2] === period
//               );
//               return (
//                 <td key={data}>{animalRegionRow ? animalRegionRow[3] : "-"}</td>
//               );
//             })}
//             {uniqueData.map((data) => {
//               const foodRegionRow = foodRegionRows.find(
//                 (row) => row[0] === data && row[2] === period
//               );
//               return (
//                 <td key={data}>{foodRegionRow ? foodRegionRow[3] : "-"}</td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
