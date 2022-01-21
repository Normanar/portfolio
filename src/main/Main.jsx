import React from "react";
import style from "./Main.module.css"

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Alimov Arman</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}