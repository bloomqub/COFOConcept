import React from "react";
import NavigationBarL from "../Components/NavigationBarL"
import NavigationBar from "./NavigationBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function NavigationBarFinal() {
    const auth = getAuth();
    const user = auth.currentUser;
        if(user) {
         return (
            <>
            <NavigationBarL />
            </>
         );
        } else {
            return (
                <>
                <NavigationBar />
                </>
            );
        }
}