import React from "react";
import style from "./Contacts.module.css"
import {Title} from "../component/title/Title";

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <form className={style.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                </form>
                {/*<a className={style.button}>*/}
                {/*    Send*/}
                {/*</a>*/}
                <button type={"submit"} className={style.button}>Send</button>
            </div>
        </div>
    )
}