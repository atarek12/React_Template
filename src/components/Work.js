import React from 'react'
import { Workk, Image, Info, Name, Title, Description, Btn } from './WorkStyle'
import homeImage from '../images/Home/home.jpg'

export default function Work() {
    return (
        <Workk>
            <Image src={homeImage} alt="Background_image" />
            <Info>
                <Name>Company Name</Name>
                <Title>Company Industry</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipite irure de eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Description>
                <Btn>Let's Begin</Btn>
            </Info>
        </Workk>
    )
}