import { useState } from "react";
import "./products.scss";
import { DataTable } from "../../components/dataTable/DataTable";
import { Add } from "../../components/add/Add";
import type { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "img",
    headerName: "Image",
    width: 80,
    renderCell: (params) => (
      <img src={params.row.img || "./no-image.png"} alt="" />
    ),
  },
  {
    field: "title",
    headerName: "Title",
    width: 180,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 120,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    type: "number",
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 100,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];
export const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};
