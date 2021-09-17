import Footer from "../sections/Footer";
import * as React from "react";
import PageHero from "../sections/PageHero";
import "./index.css"

const Home: React.ReactNode = () => {
  return (
    <main>
      <title>Home Page</title>
      <PageHero/>
      <Footer/>
    </main>
  );
};

export default Home;
