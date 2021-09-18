import React from "react";
import InstagramIcon from "./instagram.svg";

const InstagramButton: React.FC = () => {
  return (
    <a href="https://www.instagram.com/upefiu">
      <img
        className={"socialMediaIcon"}
        src={InstagramIcon}
        alt="Community on Discord"
      />
    </a>
  );
};

export default InstagramButton;
