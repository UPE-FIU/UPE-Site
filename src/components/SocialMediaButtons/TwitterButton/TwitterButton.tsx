import React from "react";
import TwitterIcon from "./twitter.svg";

const TwitterButton: React.FC = () => {
  return (
    <a href="https://twitter.com/upefiu">
      <img
        className={"socialMediaIcon"}
        src={TwitterIcon}
        alt="Community on Discord"
      />
    </a>
  );
};

export default TwitterButton;
