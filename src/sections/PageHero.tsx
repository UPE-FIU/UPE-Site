import React from "react";
import Splash from "../images/hero_splash.png";
import {
  mainHeaderText,
  mainSubHeaderText,
  eventsText,
  discordText,
} from "../constants/Strings";
import { TextButton } from "../components/TextButton/TextButton";
import { ColorPalette } from "../types/theme";
import BackgroundWave from "../components/BackgroundWave/BackgroundWave";
import "./PageHero.scss";

const PageHero: React.FC = () => {
  return (
    <div>
      <div className={"sectionContainer"}>
        <div className={"banner"}>
          <div className={"imageContainer"}>
            <img className={"splash"} src={Splash} alt="Our Community" />
          </div>
          <div className={"captionContainer"}>
            <div className={"headerContainer"}>
              <h1 className={"mainHeader"}>{mainHeaderText}</h1>
              <p className={"mainSubheader"}>{mainSubHeaderText}</p>
              <div className={"buttonsContainer"}>
                <div className={"homeEventButton"}>
                  <TextButton
                    text={eventsText}
                    backgroundColor={ColorPalette.Accent}
                  />
                </div>
                <div className={"homeDiscordButton"}>
                  <TextButton
                    text={discordText}
                    backgroundColor={ColorPalette.Accent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundWave downwards={true} />
    </div>
  );
};

export default PageHero;
