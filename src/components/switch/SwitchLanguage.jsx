import React from "react";
import "./SwitchLanguage.css";

const SwitchLanguage = () => {

    return (
        <div className="flags pl-3 py-auto">
            <a href="/turkish" title="Turkish"><span className="flag tr flag-icon flag-icon-tr flag-icon-squared"></span></a>
            <a href="/english" title="English"><span className="flag us flag-icon flag-icon-us flag-icon-squared"></span></a>
            <a href="/german" title="German"><span className="flag de flag-icon flag-icon-de flag-icon-squared"></span></a>
        </div>
    );
};

export default SwitchLanguage;
