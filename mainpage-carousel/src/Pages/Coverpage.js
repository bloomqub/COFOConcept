import React from "react"
import Slider from "../Components/Slider"
import About from "../Components/About"
import Footer from "../Components/Footer"
import NavigationBar from "../Components/NavigationBar"

const Coverpage = () => {
    return (
        <>
        <NavigationBar />
        <Slider></Slider>
        <About></About>
        <Footer></Footer>
        </>
    );

};

export default Coverpage;