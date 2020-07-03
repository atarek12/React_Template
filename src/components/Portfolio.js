import React, { useState, useEffect, useRef } from 'react'
import './PortfolioStyle.css'

import dataFile from '../js/data.json';
import Axios from 'axios';

export default function Portfolio() {
    // state to hold images coming from server (json file)
    const [images, setImages] = useState([])
    const [printedImages, setPrintedImages] = useState([])


    //create our references
    const allRef = useRef();
    const photoshopRef = useRef();
    const mobileRef = useRef();
    const editingRef = useRef();

    // useEffect is a react hook called once in the begining --> componentDidMount()
    useEffect(() => {
        setImages(dataFile.portfolio);
        setPrintedImages(dataFile.portfolio);
        console.log(dataFile.data)
    }, [])                      // empty array to be called only once, no dependencies


    // looping on all image and print them
    const portfolioImages = printedImages.map((image, index) => {

        return (
            <span className="image" key={index} >
                <img alt="" src={require(`../${image.image}`)} key={index} />
                <button className="imageBtn" >
                    <a href={require(`../${image.image}`)} target="_blank" rel="noopener noreferrer" >Show Image</a>
                </button>
            </span>
        )
    })

    //Handle Click on button function
    const handlClick = (e) => {
        const buttonName = e.target.name;

        eval(buttonName).current.classList.add('active');    // eval is a function convert string to js code


        // remove class active from all other buttons
        if (buttonName.localeCompare("allRef") !== 0) {
            allRef.current.classList.remove('active');
        }
        if (buttonName.localeCompare("photoshopRef") !== 0) {
            photoshopRef.current.classList.remove('active');
        }
        if (buttonName.localeCompare("mobileRef") !== 0) {
            mobileRef.current.classList.remove('active');
        }
        if (buttonName.localeCompare("editingRef") !== 0) {
            editingRef.current.classList.remove('active');
        }


        // get all images with different type of the selected button
        const buttonValue = eval(buttonName).current.textContent;
        let selectedTypes = [];

        // if All is selected
        if (buttonValue.localeCompare('all') === 0) {
            selectedTypes = images;
        }
        else {
            selectedTypes = images.filter((image) => {
                return (
                    image.type.localeCompare(buttonValue) === 0
                )
            })
        }

        // print only the selected type of images
        setPrintedImages(selectedTypes);
    }



    return (
        <div className="portfolio">
            <h1 className="title" >PORTFOLIO</h1>
            <div className="links" >
                <button className="btn active" onClick={handlClick} name="allRef" ref={allRef} >all</button>
                <button className="btn" onClick={handlClick} name="photoshopRef" ref={photoshopRef} >photoshop</button>
                <button className="btn" onClick={handlClick} name="mobileRef" ref={mobileRef} >mobile</button>
                <button className="btn" onClick={handlClick} name="editingRef" ref={editingRef} >editing</button>
            </div>
            <div className="photos">
                {portfolioImages}
            </div>
        </div>
    )
}
