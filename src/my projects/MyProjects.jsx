import React from "react";
import style from "./MyProjects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../component/title/Title";
import social from "../assets/images/social_network.jpg"
import todo from "../assets/images/todolist.jpg"
import {Fade} from 'react-awesome-reveal';

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
        description: "React, Redux, Typescript - project"
    },
    {
        title: "Todolist",
        style: todoImg,
        link: "https://normanar.github.io/todov1",
        description: "React, Redux, Typescript, Material UI - project"
    },
]

export function MyProjects() {

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <Fade delay={500} direction={"left"}>
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
            </Fade>
        </div>
    )
}