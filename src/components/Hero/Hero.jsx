import Star from "../Star";
import heroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <>
      <div className=" hero  ">
        <img src={heroImage} className="heroImage h-50" alt="Hero" />
        <h1 className=" text-white mx-auto p-3">START REACT</h1>
        <Star />
      </div>
    </>
  );
};

export default Hero;
