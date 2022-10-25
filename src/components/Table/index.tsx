import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { FormatCnpj, FormatTel } from "../../utils/format";

interface ITable {
  rows: GridRowsProp;
  columns: GridColDef[];
}

interface IProps {
  data: ITable;
}

function Table({ data }: IProps) {
  const { rows, columns } = data;
  return (
    <div className="flex flex-1">
      <div className="h-full w-full">
        <DataGrid
          className="text-xl peer-[:nth-child(3)]:bg-red-500"
          rows={rows}
          columns={columns}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          getRowClassName={(params) => {
            const bgGray =
              params.indexRelativeToCurrentPage % 2 === 0 ? "bg-gray-100" : "";

            const className = `text-gray-700 font-light ${bgGray}`;
            return className;
          }}
        />
      </div>
    </div>
  );
}

export { Table };
