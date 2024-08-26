"use client";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content section2">
        <Carousel
          fade
          interval={5000}
          controls={false}
          indicators={false}
          pause={false}
          className="carousel-custom"
        >
          <Carousel.Item>
            <img src="/nickPiano1.jpeg" alt="Me playing piano" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/nickPiano2.jpeg" alt="Nick tuning an upright piano" />
          </Carousel.Item>
        </Carousel>
        <div className="welcome-text">
          <h2>Welcome to Leith Hill Piano Tuning</h2>
          <p>
            I&apos;m Nick, I&apos;ve been playing the piano for over 30 years. I
            am a lover of all types of music but have a particular passion for
            funk on the Hammond organ. I offer a full range of tuning and
            restoration services for all types of piano.
          </p>
        </div>
      </div>

      <div className="welcome-content section2">
        <div className="welcome-text">
          <h2>Piano tuning and repairs</h2>
          <p>
            If you are lucky enough to have a piano, then you know it needs
            attention every now and then. I offer good value, professional
            tuning and repair services anywhere in the Southeast of England. If
            you need help maintaining your piano, please get in touch to see how
            I could help.
          </p>
        </div>
        <img
          src="/nickPiano2.jpeg"
          alt="Nick tuning an upright piano"
          className="welcome-image-nick"
        />
      </div>
    </div>
  );
}

export default Welcome;
