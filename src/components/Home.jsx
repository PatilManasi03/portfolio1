import React, { useEffect, useRef } from "react";
import pdf from "./pdf/Myresume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Welcome to my profile", "My Name is Manasi Patil", "I'm a Full Stack Developer"],
        typeSpeed: 30,
        backSpeed: 50,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <>
      <div className="container home" id="home">

        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
