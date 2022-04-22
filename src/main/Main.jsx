import React from "react";
import style from "./Main.module.scss"
import avatar from '../assets/images/ava2.png'
import Typewriter from "typewriter-effect";
import {Fade} from 'react-awesome-reveal';
import {StarSky} from "./StarSky";

export function Main() {
    return (
        <div className={style.mainBlock} id={"main"}>
            <Fade direction={"left"} delay={500}>
                <div className={style.container}>
                    <div className={style.sky}>
                    <StarSky/>
                    </div>
                    <div className={style.text}>
                        <Typewriter
                            options={{
                                strings: ["Hello!", "My name's Alimov Arman", "I'm front-end developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <img className={style.photo} src={avatar} alt={"avatar"}/>
                </div>
            </Fade>
        </div>
    )
}