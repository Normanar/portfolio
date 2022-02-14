import React from "react";
import style from "./Footer.module.scss"
import {TitleSection} from "../component/titleSection/TitleSection";
import { AiOutlineGithub,FaTelegramPlane,AiFillLinkedin} from "react-icons/all";

export function Footer() {

    const linkLinkedin = "https://www.linkedin.com/in/arman-alimov/"
    const linkTelegram = "https://t.me/ArmanAl527"
    const linkGithub = "https://github.com/Normanar"

    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <TitleSection text={"Arman Alimov"}/>
                <div className={style.linksBlock}>
                    <a className={style.links} href={linkGithub} target={"_blank"} rel="noreferrer">
                        <AiOutlineGithub size={"40px"}/>
                    </a>
                    <a className={style.links} href={linkTelegram} target={"_blank"} rel="noreferrer">
                        <FaTelegramPlane size={"40px"}/>
                    </a>
                    <a className={style.links} href={linkLinkedin} target={"_blank"} rel="noreferrer">
                        <AiFillLinkedin size={"40px"} fill={"red"}/>
                    </a>
                </div>
                <div className={style.rights}>© 2021 All rights reserved</div>
            </div>
        </div>
    )
}