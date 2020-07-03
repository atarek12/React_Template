import React, { useState, useEffect } from 'react';
import './ProfileStyle.css';
import styled from 'styled-components'

import dataFile from '../js/data.json';

//Styel for the line  --> we used styled component as it take a props
const Line = styled.hr`
    width: ${(props) => props.Experience}% ;
    margin-left: 0;
    height: 1px;
    background-color: #ff304f;
`
const SkillExp = styled.h6`
    display: inline;
    color: #002651;
    position: absolute;
    margin: 0;
    bottom: 0;
    left: ${(props) => props.Experience - 5}%;
`

export default function Profile() {

    //state to hold all skills
    const [skills, setSkills] = useState([]);

    // useEffect is a react hook called once in the begining --> componentDidMount()
    useEffect(() => {
        setSkills(dataFile.skills);
    }, [])                      // empty array to be called only once, no dependencies


    const printSkill = skills.map(skill => {
        return (
            <li className="skillsItem" key={skill.id}>
                <h6 className="skillName" > {skill.name} </h6>
                <SkillExp Experience={skill.exp}> {skill.exp}%</SkillExp>
                <Line Experience={skill.exp} />
            </li>
        )
    })

    return (
        <div className="container profile">
            <div className="myProfile">
                <h1 className="profileTitle">PROFILE</h1>
                <div className="profileInfo" >
                    <span className="profileLabels" >
                        <strong>Name</strong>
                        <strong>Birthday</strong>
                        <strong>Address</strong>
                        <strong>Phone</strong>
                        <strong>E-Mail</strong>
                    </span>
                    <span className="profileAnswers" >
                        <label>Ahmed Tarek</label>
                        <label>March 1st, 2020</label>
                        <label>Egypt, Cairo</label>
                        <label>(+2) 1010 1234 87</label>
                        <label>company@company.com</label>
                    </span>
                </div>
            </div>

            <div className="skills">
                <h1 className="profileTitle">SKILLS</h1>
                <div className="skillsInfo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipite irure de eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                    <ul className="skillsList" >
                        {printSkill}
                    </ul>
                </div>
            </div>
        </div>
    )
}
