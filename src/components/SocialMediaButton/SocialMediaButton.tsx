import React from "react";
import DiscordIcon from "./discord.svg";
import FacebookIcon from "./facebook.svg";
import InstagramIcon from "./instagram.svg";
import LinkedInIcon from "./linkedin.svg";
import TwitterIcon from "./twitter.svg";

export enum SocialMediaPlatforms {
  Discord="discord",
  Facebook="facebook",
  Instagram="instagram",
  LinkedIn="linkedin",
  Twitter="twitter",
}

interface Props{
  destination: SocialMediaPlatforms;
}

const SocialMediaButton: React.FC<Props> = (props) => {
  const renderSwitch = (destination: SocialMediaPlatforms) => {
    switch(destination) {
      case "facebook":
        return (
          <a href="https://www.facebook.com/upefiu">
            <img
              className={"socialMediaIcon"}
              src={FacebookIcon}
              alt="Community on Discord"
            />
          </a>
        );
      case "instagram":
        return (
          <a href="https://www.instagram.com/upefiu">
            <img
              className={"socialMediaIcon"}
              src={InstagramIcon}
              alt="Community on Discord"
            />
          </a>
        );
      case "linkedin":
        return (
          <a href="https://www.linkedin.com/company/upe-fiu">
            <img
              className={"socialMediaIcon"}
              src={LinkedInIcon}
              alt="Community on Discord"
            />
          </a>
        );
      case "twitter":
        return (
          <a href="https://twitter.com/upefiu">
            <img
              className={"socialMediaIcon"}
              src={TwitterIcon}
              alt="Community on Discord"
            />
          </a>
        );
      case "discord":
      default:
        return (
          <a href="https://discordapp.com/invite/upefiu">
            <img
              className={"socialMediaIcon"}
              src={DiscordIcon}
              alt="Community on Discord"
            />
          </a>
        );
    }
  }
  return renderSwitch(props.destination)
};

export default SocialMediaButton;
