import React from "react"
import Slider from "../Components/Slider"
import About from "../Components/About"
import Footer from "../Components/Footer"
import NavigationBarFinal from "../Components/NavigationBarFinal"


export default function Coverpage() {
    return( 
        <>
        <NavigationBarFinal />
        <Slider></Slider>
        <About></About>
        <Footer></Footer>
        </>
    );
}