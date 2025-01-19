import darkStar from "../assets/star-dark.svg";

const DarkStar = () => {
  return (
    <>
      <div className="drawing">
        <hr
          style={{
            borderColor: "#333",
            borderRadius: "2rem",
            backgroundColor: "#333",
            opacity: "1",
            height: "0.2rem",
            width: "15%",
          }}
        />
        <i className="bi bi-star-fill m-4 ">
          <img src={darkStar} />
        </i>
        <hr
          style={{
            borderColor: "#333",
            borderRadius: "2rem",
            backgroundColor: "#333",
            opacity: "1",
            height: "0.2rem",
            width: "15%",
          }}
        />
      </div>
    </>
  );
};

export default DarkStar;
