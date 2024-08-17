import React from "react";
import "./Welcome.css"; // Optional for custom styles if needed

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-section">
        <div className="welcome-section1">
          <img
            src="/me.jpg"
            alt="Me playing piano"
            className="welcome-image-hammond"
          />
          <div>
            <h2 style={{ padding: "10px 20px" }}>
              Hello - I'm Nick a musician and piano tuner based in the South
              East
            </h2>
            <p style={{ padding: "20px" }}>
              I've been playing the piano for over 30 years. I am a lover of all
              types of music but have a particular passion for funk on the
              hammond organ. I offer a full range of tuning and restoration
              services for all types of piano.
            </p>
          </div>
        </div>
      </div>

      <div className="welcome-section">
        <h2>Pianos are beautiful beasts but they need looking after</h2>
        <img
          src="/pianoDiagram.jpg"
          alt="Upright piano diagram"
          className="welcome-image"
        />
        <p style={{ maxWidth: "60%", margin: "0 auto" }}>
          If you are lucky enough to have a piano then you know it needs
          attention every now and then. I offer good value, professional tuning
          and repair services anywhere in the Southeast of England. If you need
          help maintaining your piano please get in touch to see how I could
          help.
        </p>
      </div>

      <div className="welcome-section-testimonials">
        <h2>Testimonials</h2>
        <div className={"welcome-section1"}>
          <img src="/elton.jpg" alt="elton" className="welcome-image-elton" />
          <p style={{ padding: "20px" }}>
            "Nick has looked after several of my grandest pianos in recent
            months. He has always provided prompt, professional and well-priced
            services."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
