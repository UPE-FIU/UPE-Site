import React from "react";
import Splash from "../images/hero_splash.png";
import {mainHeader, mainSubHeader, events, discord} from "../constants/Strings";
import "./PageHero.css";

function Banner() {
    return (
        <div>
            <div className={"sectionContainer"}>
                <div className={"banner"}>
                    <div className={"imageContainer"}>
                        <img className={"splash"} src={Splash} alt="Our Community"/>
                    </div>
                    <div className={"headerContainer"}>
                        <h1 className={"mainHeader"}>{mainHeader}</h1>
                        <p className={"mainSubheader"}> 
                            {mainSubHeader}
                        </p>
                        <div className={"buttonsContainer"}>
                            <button className={"mainHomeButton"}> {events} </button>
                            <button className={"mainHomeButton"}> {discord} </button>
                        </div>
                    </div>
                </div>
            </div>
            <svg className={"wave"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stop-color="#f89b21"/>
                        <stop offset="100%" stop-color="#fdcf0c"/>
                    </linearGradient>
                </defs>
                <path fill="url(#gradient)" fill-opacity="1" transform="scale(-1, 1)" transform-origin="center" d="M0,224L60,186.7C120,149,240,75,360,64C480,53,600,107,720,144C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>
    );
}
  
export default Banner;