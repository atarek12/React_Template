import React, { Component } from 'react'
import './ProjectsStyle.css'

import dataFile from '../js/data.json';

export default class Projects extends Component {

    // state to hold our projects
    state = {
        projects: []
    }

    // called once in every mounting
    componentDidMount() {
        this.setState({
            projects: dataFile.projects
        })
    }

    render() {

        let cards = this.state.projects.map((project, index) => {
            return (
                <div className=" container cardItem" key={index} >
                    <i className={project.icon_name}></i>
                    <h4 className="cardName"> {project.title} </h4>
                    <hr className="cardLine" />
                    <p className="cardBody" > {project.body} </p>
                </div>
            )
        })

        return (
            <div>
                <div className="container">
                    <h1 className="title" >PROJECTS</h1>
                    <div className="cards">
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}
