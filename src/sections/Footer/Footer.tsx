import BackgroundWave from "../../components/BackgroundWave/BackgroundWave";
import SocialMediaButton from "../../components/SocialMediaButtons/SocialMediaButton";
import { SocialMediaPlatforms } from "../../components/SocialMediaButtons/SocialMediaButton";
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
          <SocialMediaButton destination={SocialMediaPlatforms.Discord}/>
          <SocialMediaButton destination={SocialMediaPlatforms.LinkedIn}/>
          <SocialMediaButton destination={SocialMediaPlatforms.Instagram}/>
          <SocialMediaButton destination={SocialMediaPlatforms.Facebook}/>
          <SocialMediaButton destination={SocialMediaPlatforms.Twitter}/>
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
