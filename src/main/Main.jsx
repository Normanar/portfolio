import React from "react";
import style from "./Main.module.css"
import avatar from '../assets/images/ava.png'
import Typewriter from "typewriter-effect";

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    {/*<span>Hi there</span>*/}
                    {/*<h1>I am Alimov Arman</h1>*/}
                    {/*<p>Frontend Developer</p>*/}
                    <Typewriter
                        options={{
                            strings: ["Hello!", "My name's Alimov Arman", "I'm front-end developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                {/*<div className={style.photo}></div>*/}
                <img className={style.photo} src={avatar} alt={"avatar"} />
            </div>
        </div>
    )
}