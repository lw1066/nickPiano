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
        <h2>Cleaning and regulation</h2>
        <p>
          Cleaning and making necessary adjustments to the inner mechanism of
          the piano is important as this compensates for any wear and changes in
          wooden parts due to humidity.
        </p>{" "}
        <p>
          I offer a regulation service for uprights and grands which will give
          your instrument a new lease of life. Please contact for further
          details.
        </p>
      </div>
    </div>
  );
};

export default Page;
