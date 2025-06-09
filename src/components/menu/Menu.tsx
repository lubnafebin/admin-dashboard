import { Link } from "react-router-dom"
import "./menu.scss"


export const Menu = () =>{
    return(
        <div className="menu">
            <div className="items">
                <span className="title">Main</span>
                <Link to="/" className="listItem">
                  <img src="/home.svg" alt="" />
                  <span className="listItemTitle">Home</span>
                </Link>
                 <Link to="/">
                  <img src="/profile.png" alt="" />
                  <span className="listItemTitle">Profile</span>
                </Link>
            </div>
        </div>
    )
}