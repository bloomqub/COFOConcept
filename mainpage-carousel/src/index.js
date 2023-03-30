import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coverpage from "./Pages/Coverpage";
import OnDemand from "./Pages/OnDemandPage";
import Contact from "./Pages/Contact";
import Programs from "./Pages/Programs";
import Signup from "./Pages/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./Pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <AuthProvider>
      <Routes>
        <Route exact path="/" Component={Coverpage} />
        <Route path="/OnDemand" Component={OnDemand} />
        <Route path="/contact" Component={Contact} />
        <Route path="/Programs" Component={Programs} />
        <Route path="/signup" Component={Signup} />  
        <Route path="/login" Component={Login} />
      </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
