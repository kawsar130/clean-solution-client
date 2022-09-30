import React from "react";
import { useState } from "react";
import "./NavItem.css";

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    const { icon, title } = props;
    return (
        <li className="nav-item">
            <button className="icon-button" onClick={() => setOpen(!open)}>
                <span className="nav-icon">{icon}</span>{" "}
                <span className="nav-title">{title}</span>
            </button>
            {open && props.children}
        </li>
    );
};

export default NavItem;
