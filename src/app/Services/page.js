import "./services.css";

const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/pianoDiagram.jpg"
        alt="Nick tuning an upright piano"
        className="piano-diagram"
      />
      <div className="servicesText">
        <h2>Tuning</h2>
        <p>
          Pianos are under a huge amount of pressure due to the tension of the
          strings and can go out of tune even if not played much, changes in
          humidity also affect the tuning. A twice yearly tuning is recommended.
        </p>
        <p>
          I charge £85 for a tuning and any running repairs. Please leave up to
          3 hours per appointment.
        </p>
        <h2>Regulation</h2>I offer a regulation service for upright and grand
        pianos. Please contact me for further details.
      </div>
    </div>
  );
};

export default Page;
