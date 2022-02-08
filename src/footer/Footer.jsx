import React from "react";
import style from "./Footer.module.css"
import {Title} from "../component/title/Title";
import {TitleSection} from "../component/titleSection/TitleSection";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                {/*<h2 style={{backgroundColor: "white"}}>Arman Alimov</h2>*/}
                <TitleSection text={"Arman Alimov"}/>
                <div className={style.squareBlock}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square_end}></div>
                </div>
                <div className={style.rights}>© 2021 All rights reserved</div>
            </div>
        </div>
    )
}