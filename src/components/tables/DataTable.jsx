import { ArrowUpDown } from 'lucide-react';
import StatusBadge from './StatusBadge';
import './DataTable.css';

function DataTable({ columns, data }) {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                <div className="th-content">
                  <span>{column.label}</span>
                  {column.sortable && <ArrowUpDown size={14} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.key === 'status' ? (
                    <StatusBadge status={row[column.key]} />
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
