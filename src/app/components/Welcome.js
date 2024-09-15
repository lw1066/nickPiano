"use client";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Welcome.css";
import Link from "next/link";

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
            <img src="/nickPiano1.jpg" alt="Me playing piano" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/nickPiano4.jpg" alt="Nick tuning an upright piano" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/nickPiano3.jpg" alt="Me tuning piano" />
          </Carousel.Item>
        </Carousel>
        <div className="welcome-text">
          <h2>Welcome to Leith Hill Piano Tuning</h2>
          <p>
            I&apos;m Nick, and I&apos;ve been playing the piano from an early
            age. I&apos;ve always had a real passion for this amazing
            instrument. My favourite styles are jazz and funk, and you can often
            find me grooving with an 80&apos;s themed function band.
          </p>
          <p>
            I&apos;m a qualified piano tuner, having studied at the Piano
            Technology School. I blend modern technology with traditional
            techniques to ensure precise and accurate tuning.{" "}
          </p>
        </div>
      </div>

      <div className="welcome-content section2">
        <div className="welcome-text">
          <h2>Piano tuning services in the Surrey and Sussex area</h2>
          <p>
            If you have a piano, then you know it needs regular attention. Best
            practice is to have it tuned every six months, as changes in
            temperature can affect the air humidity, causing your piano to go
            out of tune. To help protect your piano from more extreme
            temperature changes, it&apos;s best to keep it away from radiators,
            windows, ovens, and doorways.
          </p>
          <p>
            Take a look at the <Link href="/Services">services</Link> page for
            details of how I can help keep your piano in tip-top condition.
          </p>
        </div>
        <img
          src="/nickPiano2.jpg"
          alt="Nick tuning an upright piano"
          className="welcome-image-nick"
        />
      </div>
    </div>
  );
}

export default Welcome;
