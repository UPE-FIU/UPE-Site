import React from "react";
import FacebookIcon from "./facebook.svg";

const FacebookButton: React.FC = () => {
  return (
    <a href="https://www.facebook.com/upefiu">
      <img
        className={"socialMediaIcon"}
        src={FacebookIcon}
        alt="Community on Discord"
      />
    </a>
  );
};

export default FacebookButton;
