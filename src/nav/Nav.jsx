import React from "react";
import style from "./Nav.module.scss"
import {Link} from "react-scroll"

export function Nav() {
    return (
        <div className={style.nav}>
            <Link to="main" spy={true} smooth={true} duration={500} offset={-80}>
                MAIN
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500} offset={-80}>
                SKILLS
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500} offset={-80}>
                PROJECTS
            </Link>
            <Link to="contacts" spy={true} smooth={true} duration={500} offset={-80}>
                CONTACTS
            </Link>
        </div>
    )
}