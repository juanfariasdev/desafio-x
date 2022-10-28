import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid/";

function CustomToolbar() {
  return (
    <GridToolbarContainer className="py-3 px-2 bg-blue-800 justify-between">
      <div className="[&>*]:text-white [&>*]:text-base gap-2 ">
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </div>
      <div className="">
        <GridToolbarQuickFilter
          placeholder="Pesquisar na lista"
          className="[&>*]:text-xl bg-white rounded py-0 px-2"
        />
      </div>
    </GridToolbarContainer>
  );
}

export { CustomToolbar };
