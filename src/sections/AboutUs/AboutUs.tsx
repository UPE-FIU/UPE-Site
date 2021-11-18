import React from "react";
import Images from "../../images/about_us.png";
import "./AboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <section className={"aboutUsSection"}>
        <div className={"aboutUsText"}>
        <div className={"aboutUsTitle"}>
          <h1>About Us</h1>
        </div>

        <div className={"aboutUsDescription"}>
          <p>
            Upsilon Pi Epsilon (UPE) is the largest student organization for
            technology at Florida International University (FIU). Our mission is
            to provide students with the opportunities to develop technically
            and professionally. To do so, we aim to build a community where any
            student, no matter the major or skill level, can learn and develop
            with technology. Students in our organization are eligable to join
            any of our various programs, workshops and events!
          </p>

          <p>
            UPE is supported by FIU’s College of Engineering & Computing and is
            sponsored by many top companies from various industries. Our
            organization has been recognized both locally and nationally, named
            “Outstanding Engineering Organization” by FIU and “Outstanding
            Chapter” by the UPE National Council.
          </p>
        </div>
        </div>
        <div className={"responsive-img"}>
          <img alt="Splash (2)" id="aboutSplash" src={Images} />
        </div>
    </section>
  );
};

export default AboutUs;
