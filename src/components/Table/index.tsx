import { DataGrid, GridColDef, GridRowsProp, ptBR } from "@mui/x-data-grid";
import { CustomToolbar } from "./customToolbar";

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
          className="text-xl rounded overflow-hidden"
          rows={rows}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
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
