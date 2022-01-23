import React from "react";
import style from "./MyProjects.module.css"
import {Project} from "./Project/Project";

const descriptionMyProjects = {
    socialNetwork : {
        title : "Social network",
        description : "Social network good project for something"
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
                <h2 className={style.title}>My projects</h2>
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