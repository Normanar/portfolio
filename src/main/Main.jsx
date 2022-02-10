import React from "react";
import style from "./Main.module.scss"
import avatar from '../assets/images/ava.png'
import Typewriter from "typewriter-effect";

export function Main() {
    return (
        <div className={style.mainBlock} id={"main"}>
            <div className={style.container}>
                <div className={style.text}>
                    <Typewriter
                        options={{
                            strings: ["Hello!", "My name's Alimov Arman", "I'm front-end developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <img className={style.photo} src={avatar} alt={"avatar"} />
            </div>
        </div>
    )
}