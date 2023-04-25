import React from "react"
import Slider from "../Components/Slider"
import About from "../Components/About"
import NavigationBarFinal from "../Components/NavigationBarFinal"
import FooterHP from "../Components/FooterHP"


export default function Coverpage() {
    return( 
        <>
        <NavigationBarFinal />
        <Slider></Slider>
        <About></About>
        <FooterHP />
        </>
    );
}