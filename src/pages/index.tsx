import Footer from "../sections/Footer/Footer";
import * as React from "react";
import PageHero from "../sections/PageHero/PageHero";

const Home: React.ReactNode = () => {
  document.documentElement.setAttribute("theme", "light");

  return (
    <main>
      <title>Home Page</title>
      <PageHero />
      <Footer />
    </main>
  );
};

export default Home;
