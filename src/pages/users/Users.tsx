import type { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { Add } from "../../components/add/Add";
import { useState } from "react";

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
export const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="users" columns={columns} setOpen={setOpen} />}
    </div>
  );
};
