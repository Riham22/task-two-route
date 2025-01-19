import DarkStar from "../DarkStar";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modals/Modal";
import logCabin from "../../assets/logCabin.png";
import tastyCake from "../../assets/tastyCake.png";
import circusTent from "../../assets/circusTent.png";
import controller from "../../assets/controler.png";
import lockedSafe from "../../assets/lockedSafe.png";
import submarine from "../../assets/submarine.png";
const Portfolio = () => {
  const imgs = [
    { id: 1, srs: logCabin, title: "LOG CABIN" },
    { id: 2, srs: tastyCake, title: "TASTY CAKE" },
    { id: 3, srs: circusTent, title: "CIRCUS TENT" },
    { id: 4, srs: controller, title: "CONTROLLER" },
    { id: 5, srs: lockedSafe, title: "LOCKED SAFE" },
    { id: 6, srs: submarine, title: "SUBMARINE" },
  ];
  return (
    <>
      <div className="portfolio">
        <h1 className=" ">PORTFOLIO</h1>
        <DarkStar />

        <div className="row ">
          {imgs.map((img) => (
            <div key={img.id} className=" col-lg-4 col-md-6 col-sm-12 mb-5 ">
              <button
                className="buttonOfModal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${img.id}`}
              >
                <div className="con">
                  <img src={img.srs} className="image" />
                  <div className="overlay">
                    <a href="#" className="icon" title="User Profile">
                      <FaPlus />
                    </a>
                  </div>
                </div>
              </button>
              <Modal
                key={img.id}
                title={img.title}
                src={img.srs}
                id={`modal-${img.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
