import React, {useState} from "react";
import style from "./Contacts.module.scss"
import {Title} from "../component/title/Title";
import map from '../assets/images/map.png'
import {Fade} from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';

export function Contacts() {

    const mapImg = {
        backgroundImage: `url(${map})`
    }

    const [status, setStatus] = useState(null);
    let timer;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_48i85yi', 'template_smreq8f', e.target, 'user_zRvvGCcGQj9AW8fOC7vpb')
            .then((result) => {
                setStatus(result.status);
                e.target.reset();
            }, ((error) => {
                setStatus(error.status);
            }));
    };

    status !== null && (timer = setTimeout(()=> setStatus(null),4000))

    const alertHandler = () => {
        clearTimeout(timer)
        setStatus(null)
    }


    return (
        <div className={style.contactsBlock} style={mapImg} id={"contacts"}>
            <Fade delay={500} direction={"left"}>
                <div className={style.contactsContainer}>
                    <Title text={"Contacts"}/>
                    <form className={style.form} onSubmit={sendEmail}>
                        <input type={"text"} placeholder={"Name"} name="name" autoComplete="off" required/>
                        <input type={"email"} placeholder={"Email"} name="email" autoComplete="off" required/>
                        <textarea placeholder={"Message"} rows={4} name="message" autoComplete="off" required/>
                    <button
                        className={style.buttonNew}
                        type="submit"
                        name="send"
                        disabled={status === 200 || status === 0}
                    >SEND MESSAGE
                    </button>
                    </form>
                    {status === 200 &&
                    <Alert className={style.alert} onClose={alertHandler}><b>success</b> — email sent, Thank you!</Alert>}
                    {status === 0 &&
                    <Alert severity="error" className={style.alert} onClose={alertHandler}><b>error</b> — email not sent, try again!</Alert>}
                </div>
            </Fade>
        </div>
    )
}





















//
// return (
//     <div className={style.contactsBlock} style={mapImg} id={"contacts"}>
//         <Fade delay={500} direction={"left"}>
//             <div className={style.contactsContainer}>
//                 <Title text={"Contacts"}/>
//                 <form className={style.form}>
//                     <input type={"text"} placeholder={"Name"}/>
//                     <input type={"text"} placeholder={"Email"}/>
//                     <textarea placeholder={"Message"} rows={4}/>
//                 </form>
//                 <button className={style.buttonNew}>SEND MESSAGE</button>
//             </div>
//         </Fade>
//     </div>
// )