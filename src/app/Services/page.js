const Page = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/pianoDiagram.jpg"
        alt="Nick tuning an upright piano"
        className="welcome-image-nick"
      />
      <p>A page of services...</p>
    </div>
  );
};

export default Page;
