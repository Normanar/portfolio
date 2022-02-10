import React from "react";
import style from "./MyProjects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../component/title/Title";
import social from "../assets/images/social_network.jpg"
import todo from "../assets/images/todolist.jpg"

const socialImg = {
    backgroundImage: `url(${social})`
}

const todoImg = {
    backgroundImage: `url(${todo})`
}

const descriptionMyProjects = [
    {
        title: "Social network",
        style: socialImg,
        link: "https://normanar.github.io/my-nett2",
        description: "Social network good project for something Social network good project for something Social network good project for something"
    },
    {
        title: "Todolist",
        style: todoImg,
        link: "https://normanar.github.io/todov1",
        description: "Todolist good project for something"
    },
]

export function MyProjects() {

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <div className={style.projectsContainer}>
                <Title text={"My projects"}/>
                <div className={style.projects}>
                    {descriptionMyProjects.map(p => {
                        return <Project
                            title={p.title}
                            description={p.description}
                            style={p.style}
                            link={p.link}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}