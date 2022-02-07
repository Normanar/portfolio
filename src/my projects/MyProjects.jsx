import React from "react";
import style from "./MyProjects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../component/title/Title";
import social from "../assets/images/social_network.jpg"
import social2 from "../assets/images/social_network2.jpg"
import todo from "../assets/images/todolist.jpg"

const descriptionMyProjects = {
    socialNetwork : {
        title : "Social network",
        description : "Social network good project for something Social network good project for something Social network good project for something"
    },
    toDoList : {
        title : "Todolist",
        description: "Todolist good project for something"
    }
}

export function MyProjects() {

    const socialImg = {
        backgroundImage : `url(${social})`
    }

    const todoImg = {
        backgroundImage : `url(${todo})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                {/*<div className={style.title}>*/}
                {/*    <h2>My projects</h2>*/}
                {/*</div>*/}
                <Title text={"My projects"}/>
                <div className={style.projects}>
                    <Project title = {descriptionMyProjects.socialNetwork.title}
                             description = {descriptionMyProjects.socialNetwork.description}
                             style = {socialImg}
                    />
                    <Project title = {descriptionMyProjects.toDoList.title}
                             description = {descriptionMyProjects.toDoList.description}
                             style={todoImg}
                    />
                </div>
            </div>
        </div>
    )
}