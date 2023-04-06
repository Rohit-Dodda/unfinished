import React from "react";
import Navbar from "../home-components/Navbar";
import Hero from "../home-components/Hero";
import Login from "../home-components/Login";
import Steps from '../home-components/Steps'
import Feedbacks from '../home-components/Feedbacks'

const Home = () => {
  return (
    <>
  <Navbar style={{order: 1}} />
  <Hero style={{order: 2}} />
  <Steps style={{ order: 3}} />

  </>
  );
};

export default Home;
