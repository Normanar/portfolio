import React from "react";
import style from "./Footer.module.css"

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 style={{backgroundColor: "white"}}>Arman Alimov</h2>
                <div className={style.squareBlock}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square_end}></div>
                </div>
                <div style={{backgroundColor: "white"}}>All rights reserved</div>
            </div>
        </div>
    )
}