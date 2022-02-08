import React from "react";
import style from "./Contacts.module.css"
import {Title} from "../component/title/Title";
import map from '../assets/images/map.png'

export function Contacts() {

    const mapImg = {
        backgroundImage : `url(${map})`
    }

    return (
        <div className={style.contactsBlock} style={mapImg}>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <form className={style.form}>
                    <input type={"text"} placeholder={"Name"}/>
                    <input type={"text"} placeholder={"Email"}/>
                    <textarea placeholder={"Message"} rows={4}/>
                </form>
                {/*<a className={style.button}>*/}
                {/*    Send*/}
                {/*</a>*/}
                {/*<button type={"submit"} className={style.button}>SEND MESSAGE</button>*/}
                <div className={style.buttonNew}>SEND MESSAGE</div>
            </div>
        </div>
    )
}