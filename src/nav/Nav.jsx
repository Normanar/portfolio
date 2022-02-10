import React from "react";
import style from "./Nav.module.scss"
import {Link} from "react-scroll"

export function Nav() {
    return (
        <div className={style.nav}>
            <Link activeClass={style.active} to="main" spy={true} smooth={true} duration={500} offset={-78}>
                MAIN
            </Link>
            <Link activeClass={style.active} to="skills" spy={true} smooth={true} duration={500} offset={-80}>
                SKILLS
            </Link>
            <Link activeClass={style.active} to="projects" spy={true} smooth={true} duration={500} offset={-80}>
                PROJECTS
            </Link>
            <Link activeClass={style.active} to="contacts" spy={true} smooth={true} duration={500} offset={-80}>
                CONTACTS
            </Link>
        </div>
    )
}