import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import "./dataTable.scss";
import { GridToolbar } from "@mui/x-data-grid/internals";
import { Link } from "react-router-dom";

type propsType = {
  rows: object[];
  columns: GridColDef[];
  slug: string;
};

export const DataTable = (props: propsType) => {

    const handleDelete=(id:number)=>{

        console.log(`Delete row with id: ${id}`);     
    }

    const actionColumn: GridColDef ={
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action">
            <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="./view.png" alt="" />
            </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="./delete.png" alt="" />
          </div>
        </div>
      );
    }
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
