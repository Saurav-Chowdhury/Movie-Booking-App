import { Button } from "@material-ui/core";
import React from "react";

import "./header.css";
const Header = (props) => {
    return ( 
        <div className="header">
            <img id="logo" src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg" alt="logo" />
            <button className="btn btn-primary">{props.props}</button>
        </div>
     );
}
 
export default Header;