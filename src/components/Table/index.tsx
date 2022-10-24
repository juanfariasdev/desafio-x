import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  {
    id: 1,
    name: "Juan Pablo Farias",
    cnpj: "61626470000150",
    email: "juanpablo.p.a.f@gmail.com",
    tel: "35984228193",
  },
  {
    id: 2,
    name: "Pedro Lucas",
    cnpj: "09567412000182",
    email: "juanpablo.p.a.f@gmail.com",
    tel: "35984228193",
  },
  {
    id: 3,
    name: "Jorge Matheus",
    cnpj: "04917772000143",
    email: "juanpablo.p.a.f@gmail.com",
    tel: "35984228193",
  },
];

const columns: GridColDef[] = [
  { field: "name", headerName: "Nome", flex: 2 },
  { field: "cnpj", headerName: "CNPJ", flex: 1 },
  { field: "email", headerName: "E-mail", flex: 1 },
  { field: "tel", headerName: "Telefone", width: 100 },
  {
    field: "",
    headerName: "Ações",
    width: 150,
    sortable: false,
    filterable: false,
  },
];

function Table() {
  return (
    <div className="flex flex-1">
      <div className="h-full w-full">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export { Table };
