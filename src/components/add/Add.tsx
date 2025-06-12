import type { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type propTypes = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Add = (props: propTypes) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form action="" onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "createdAt")
            .filter((item) => item.editable !== false)
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};
