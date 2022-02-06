import React from "react";
import style from "./MyProjects.module.css"
import {Project} from "./Project/Project";
import {Title} from "../component/title/Title";

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
                    />
                    <Project title = {descriptionMyProjects.toDoList.title}
                             description = {descriptionMyProjects.toDoList.description}
                    />
                </div>
            </div>
        </div>
    )
}