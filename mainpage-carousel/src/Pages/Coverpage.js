import React from "react"
import Slider from "../Components/Slider"
import About from "../Components/About"
import Footer from "../Components/Footer"
import NavigationBar from "../Components/NavigationBar"
import loggedIn from "../Pages/Login";
import NavigationBarL from "../Components/NavigationBarL"
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Coverpage() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if(user) {
    //      return (
    //          <>
    //          <NavigationBar />
    //          <Slider></Slider>
    //          <About></About>
    //          <Footer></Footer>
    //          </>
    //      )
    //     } else {

    //     }
    // });
    return( 
        <>
        <NavigationBar />
        <Slider></Slider>
        <About></About>
        <Footer></Footer>
        </>
    );
}