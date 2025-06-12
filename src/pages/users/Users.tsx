import type { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
export const Users = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 80,
      renderCell: (params) => (
        <img src={params.row.img || "./no-avatar.png"} alt="" />
      ),
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 120,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 120,
      editable: true,
    },   
    {
      field: "email",
      headerName: "Email",
      width: 180,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      editable: false,
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
  ];
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};
