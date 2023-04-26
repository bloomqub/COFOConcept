import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coverpage from "./Pages/Coverpage";
import OnDemand from "./Pages/OnDemandPage";
import Contact from "./Pages/Contact";
import Classes from "./Pages/Classes";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";
import Shop from "./Pages/Shop";
import UpdateProfile from "./Pages/UpdateProfile";
import PrivateRoute from "./Components/PrivateRoute";
import PrivateRouteLS from "./Components/PrivateRouteLS";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <Routes>
        <Route exact path="/" Component={Coverpage} />
        <Route path="/OnDemand" Component={OnDemand} />
        <Route path="/contact" Component={Contact} />
        <Route path="/classes" Component={Classes} />
        <Route path="/signup" element={<PrivateRouteLS> <Signup /> </PrivateRouteLS>}/>
        <Route path="/login" element={<PrivateRouteLS> <Login /> </PrivateRouteLS>}/>
        <Route path="/Shop" Component={Shop} />
        <Route path="/profile" element={<PrivateRoute> <Profile/> </PrivateRoute>} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="/update-profile" Component={UpdateProfile}/>
      </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
