import { Link } from "react-router-dom"
import "./menu.scss"
import {menu} from "../../data"


export const Menu = () =>{
    return(
        <div className="menu">
            {menu.map(item => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map(subItem => (
                        <Link to={subItem.url} className="listItem" key={subItem.id}>
                            <i className={`fas fa-${subItem.icon}`}></i>
                            <span className="listItemTitle">{subItem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}