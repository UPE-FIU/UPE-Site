import Footer from "../sections/Footer/Footer";
import * as React from "react";
import PageHero from "../sections/PageHero/PageHero";
import AboutUs from "../sections/AboutUs/AboutUs";

const Home: React.ReactNode = () => {
  document.documentElement.setAttribute("theme", "light");

  return (
    <main>
      <title>Home Page</title>
      <PageHero />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Home;
