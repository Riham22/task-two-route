import Star from "../Star";

const About = () => {
  return (
    <>
      <div className="about p-8 ">
        <h1>ABOUT</h1>
        <Star />
        <div className="row">
          {" "}
          <p className="col-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto esse
            libero quibusdam ab soluta, dolorum amet! Odio, vitae iste ut ant
            dolore velit modi facere rerum id.
          </p>
          <p className="col-4">
            ur adipisicing elitum quos quaemi, ducimus ipsum ratione deleniti
            vitae enim accusamus illum aliquta laudantium nemo.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
