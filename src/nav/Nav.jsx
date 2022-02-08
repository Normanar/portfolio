import React from "react";
import style from "./Nav.module.css"

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">MAIN</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACTS</a>
        </div>
    )
}