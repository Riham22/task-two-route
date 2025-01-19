import star from "../assets/star-fill.svg";
const Star = () => {
  return (
    <>
      <div className="drawing">
        <hr
          style={{
            borderColor: "white",
            borderRadius: "2rem",
            backgroundColor: "white",
            opacity: "1",
            height: "0.2rem",
            width: "15%",
          }}
        />
        <i className="bi bi-star-fill m-4">
          <img src={star} />
        </i>
        <hr
          style={{
            borderColor: "white",
            borderRadius: "2rem",
            backgroundColor: "white",
            opacity: "1",
            height: "0.2rem",
            width: "15%",
          }}
        />
      </div>
    </>
  );
};

export default Star;
