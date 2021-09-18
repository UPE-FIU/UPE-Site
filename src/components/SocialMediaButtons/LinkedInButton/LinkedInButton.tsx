import React from "react";
import LinkedInIcon from "./linkedin.svg";

const LinkedInButton: React.FC = () => {
  return (
    <a href="https://www.linkedin.com/company/upe-fiu">
      <img
        className={"socialMediaIcon"}
        src={LinkedInIcon}
        alt="Community on Discord"
      />
    </a>
  );
};

export default LinkedInButton;
