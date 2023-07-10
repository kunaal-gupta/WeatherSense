import { WiDaySnowWind } from "react-icons/wi";
import { Link } from "react-router-dom";
import Login from "./LoginForm.jsx";
import Register from "./RegisterForm.jsx";
import "../css/Home.css"
import React, { useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    const currentURL = window.location.href;

    if (currentURL.includes('/login')) {
      console.log('/login is present in the URL');
      document.getElementById('register').style.display = 'none';

    } else if (currentURL.includes('/register')) {
      console.log('/register is present in the URL');
      document.getElementById('login').style.display = 'none';

    }
  }, []);

  return (

    <>
      <div className="background">
        <div className="Welcome-section">
          <div className="welcome-empty-section">
            < WiDaySnowWind className="WeatherIcon" />

          </div>
          <div className="Welcome-heading">
            <div> Welcome to Weather<span style={{ color: 'White' }}>Sense</span></div>
            <div id="login">
              <Login />
            </div>
            <div id="register">
              < Register />
            </div>
            {/* <Link to="/dashboard">
              <button className="Welcome-button">Load Dashboard</button>
            </Link>            */}
            <div className="loader"></div>

          </div>
        </div>
      </div>
    </>
  )
}