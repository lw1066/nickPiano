import React from "react";
import "./Welcome.css"; // Import the CSS file for custom styles

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-section1">
        <div className="welcome-content">
          <img
            src="/nickPiano1.jpeg"
            alt="Me playing piano"
            className="welcome-image-nick"
          />
          <div className="welcome-text">
            <h2>Welcome to Leith Hill Pianos</h2>

            <p>
              I&apos;m Nick, I&apos;ve been playing the piano for over 30 years.
              I am a lover of all types of music but have a particular passion
              for funk on the Hammond organ. I offer a full range of tuning and
              restoration services for all types of piano.
            </p>
          </div>
        </div>
      </div>

      <div className="welcome-content section2">
        <div className="welcome-text">
          <h2>Piano tuning and repairs in the South East</h2>

          <p style={{ width: "70%", margin: "0 auto" }}>
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
