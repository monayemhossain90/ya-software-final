import React from "react";
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Career from "./Career";
import Counter from "./Counter";
import Join from "./Join";
import Services from "./Services";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Banner />
      <Counter />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Join />
      <Career />
    </div>
  );
}

export default Home;
