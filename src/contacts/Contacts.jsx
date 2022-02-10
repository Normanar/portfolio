import React from "react";
import style from "./Contacts.module.scss"
import {Title} from "../component/title/Title";
import map from '../assets/images/map.png'
import {Fade} from 'react-awesome-reveal';


export function Contacts() {

    const mapImg = {
        backgroundImage: `url(${map})`
    }

    return (
        <div className={style.contactsBlock} style={mapImg} id={"contacts"}>
            <Fade delay={500} direction={"left"}>
                <div className={style.contactsContainer}>
                    <Title text={"Contacts"}/>
                    <form className={style.form}>
                        <input type={"text"} placeholder={"Name"}/>
                        <input type={"text"} placeholder={"Email"}/>
                        <textarea placeholder={"Message"} rows={4}/>
                    </form>
                    <div className={style.buttonNew}>SEND MESSAGE</div>
                </div>
            </Fade>
        </div>
    )
}