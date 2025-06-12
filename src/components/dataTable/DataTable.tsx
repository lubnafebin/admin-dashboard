import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import "./dataTable.scss";
import { GridToolbar } from "@mui/x-data-grid/internals";
import { Link } from "react-router-dom";
import { Visibility, Delete } from "@mui/icons-material";

type propsType = {
  rows: object[];
  columns: GridColDef[];
  slug: string;
};

export const DataTable = (props: propsType) => {
  const handleDelete = (id: number) => {
    console.log(`Delete row with id: ${id}`);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 80,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <Visibility />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <Delete />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};
