import BackgroundWave from "../components/BackgroundWave/BackgroundWave";
import DiscordButton from "../components/SocialMediaButtons/DiscordButton/DiscordButton";
import FacebookButton from "../components/SocialMediaButtons/FacebookButton/FacebookButton";
import InstagramButton from "../components/SocialMediaButtons/InstagramButton/InstagramButton";
import LinkedInButton from "../components/SocialMediaButtons/LinkedInButton/LinkedInButton";
import TwitterButton from "../components/SocialMediaButtons/TwitterButton/TwitterButton";
import React from "react";
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <BackgroundWave downwards={false} />
      <footer>
        <h1 className={"socialMediaTitle"}>Join the Community!</h1>
        <div className={"socialMediaIconContainer"}>
          <DiscordButton />
          <LinkedInButton />
          <InstagramButton />
          <FacebookButton />
          <TwitterButton />
        </div>
        <h1>
          Questions?{" "}
          <a
            className={"contactUsTitle"}
            href="mailto:upe@fiu.edu?Subject=...Question%20regarding%20UPE!"
          >
            Contact Us
          </a>
          !
        </h1>
        <p className={"copyright"}>
          ⓒ Copyright {year} - Upsilon Pi Epsilon at Florida International
          University
        </p>
      </footer>
    </div>
  );
}

export default Footer;
