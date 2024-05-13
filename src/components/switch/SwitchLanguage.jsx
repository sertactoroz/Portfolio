import React, { useState } from "react";
import "./SwitchLanguage.css";

const SwitchLanguage = () => {
    const [isDark, setIsDark] = useState(false);

    const handleLabelClick = () => {
        if (isDark) {
            localStorage.setItem("theme-color", "dark");
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
            setIsDark(false);
        } else {
            localStorage.setItem("theme-color", "light");
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
            setIsDark(true);
        }
    };

    return (

        <div class="nav-link scroll flags pl-3 py-auto">
            <a href="#" title="Turkish"><span class="flag tr flag-icon flag-icon-tr flag-icon-squared"></span></a>
            <a href="#" title="English"><span class="flag us flag-icon flag-icon-us flag-icon-squared"></span></a>
            <a href="#" title="Deutch"><span class="flag de flag-icon flag-icon-de flag-icon-squared"></span></a>
        </div>
    );
};

export default SwitchLanguage;
