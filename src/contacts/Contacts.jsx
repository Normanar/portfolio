import React from "react";
import style from "./Contacts.module.css"

export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.name}>Contacts</h2>
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