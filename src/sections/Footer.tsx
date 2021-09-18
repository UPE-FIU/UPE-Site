import DiscordIcon from "../images/discord.svg";
import FacebookIcon from "../images/facebook.svg";
import InstagramIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/linkedin.svg";
import TwitterIcon from "../images/twitter.svg";
import React from "react";
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <svg className={"wave"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#f89b21"/>
                <stop offset="100%" stop-color="#fdcf0c"/>
            </linearGradient>
        </defs>
        <path fill="url(#gradient)" fill-opacity="1" transform="scale(-1, 1)" transform-origin="center" d="M0,224L60,186.7C120,149,240,75,360,64C480,53,600,107,720,144C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <footer>
        <h1>Join the Community!</h1>
        <div className={"socialMediaIconContainer"}>
          <a href="https://discordapp.com/invite/upefiu"><img className={"socialMediaIcon"} src={DiscordIcon} alt="Our Community"/></a>
          <a href="https://www.facebook.com/upefiu"><img className={"socialMediaIcon"} src={FacebookIcon} alt="Our Community"/></a>
          <a href="https://www.instagram.com/upefiu"><img className={"socialMediaIcon"} src={InstagramIcon} alt="Our Community"/></a>
          <a href="https://www.linkedin.com/company/upe-fiu"><img className={"socialMediaIcon"} src={LinkedInIcon} alt="Our Community"/></a>
          <a href="https://twitter.com/upefiu"><img className={"socialMediaIcon"} src={TwitterIcon} alt="Our Community"/></a>
        </div>
        <h1>Questions? <a className={"contactUsTitle"}href="mailto:upe@fiu.edu?Subject=...Question%20regarding%20UPE!">Contact Us</a>!</h1>
        <p className={"copyright"}>ⓒ Copyright {year} - Upsilon Pi Epsilon at Florida International University</p>
      </footer>
    </div>
  );
}

export default Footer;
