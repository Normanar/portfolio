import React from "react";
import style from "./Header.module.scss"
import {Nav} from "../nav/Nav";


// export function Header() {
//     return (
//         <div className={style.header}>
//             <div className={style.headerContainer}>
//                 <Nav/>
//             </div>
//         </div>
//     )
// }

export function Header() {
    return (
        <>
            <div className={style.header}>
                <div className={style.headerContainer}>
                    <Nav/>
                </div>
            </div>
            {/*<div className={style.header2}>*/}
            {/*    .*/}
            {/*</div>*/}
        </>
    )
}