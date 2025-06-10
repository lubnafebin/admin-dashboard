import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="profile.png" alt="" />
        <span>admin</span>{" "}
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icons" />
        <img src="/app.png" alt="" className="icons" />
        <img src="/expand.png" alt="" className="icons" />
        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://imgs.search.brave.com/fyO2n0KdOq_TXvQaxoaUW65Z_KGzAJp4SGCXUrnGpkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTky/MzU0NDg5NS9waG90/by93b21hbi1jb250/ZW1wbGF0aW5nLWlu/LWZvcmVzdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dHR3/V3FsemhZZFN4Q3g5/bi1CdTRGUTdPRWNM/enJlQmJvblBpc253/ZDh2WT0"
            alt=""
          />
          <span>jack</span>
        </div>
        <img src="/settings.svg" alt="" className="icons" />
      </div>
    </div>
  );
};
