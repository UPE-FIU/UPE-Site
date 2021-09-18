import React from "react";
import DiscordIcon from "./discord.svg";

const DiscordButton: React.FC = () => {
  return (
    <a href="https://discordapp.com/invite/upefiu">
      <img
        className={"socialMediaIcon"}
        src={DiscordIcon}
        alt="Community on Discord"
      />
    </a>
  );
};

export default DiscordButton;
