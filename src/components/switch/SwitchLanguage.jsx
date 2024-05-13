import React from "react";
import "./SwitchLanguage.css";

const SwitchLanguage = () => {

    return (
        <div class="flags pl-3 py-auto">
            <a href="#" title="Turkish"><span class="flag tr flag-icon flag-icon-tr flag-icon-squared"></span></a>
            <a href="#" title="English"><span class="flag us flag-icon flag-icon-us flag-icon-squared"></span></a>
            <a href="#" title="Deutch"><span class="flag de flag-icon flag-icon-de flag-icon-squared"></span></a>
        </div>
    );
};

export default SwitchLanguage;
