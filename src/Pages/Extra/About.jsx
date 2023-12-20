import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import "./Extrapages.css";

const About = () => {
  const aboutImg =
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="extrapage">
      <Navbar />
      <SingleBanner heading="About Us" image={aboutImg} />
      <div className="pgleft pgcommon">
        <img src={aboutImg} alt="noimg" />
        <div>
          <h1>Our Story</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            quisquam totam est quis ratione quasi beatae porro autem vel sit
            dicta corporis amet quibusdam voluptates nulla, suscipit, ut dolore,
            dignissimos pariatur natus. Dolor commodi quis eos doloremque, saepe
            cum.
          </p>
        </div>
      </div>
      <div className="pgright pgcommon">
        <img src={aboutImg} alt="noimg" />
        <div>
          <h1>Who are we</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            quisquam totam est quis ratione quasi beatae porro autem vel sit
            dicta corporis amet quibusdam voluptates nulla, suscipit, ut dolore,
            dignissimos pariatur natus. Dolor commodi quis eos doloremque, saepe
            cum.
          </p>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default About;
