import PropTypes from "prop-types";
import DarkStar from "../DarkStar";

const Modal = ({ title, src, id }) => {
  return (
    <div>
      {" "}
      <div className="modal" id={id}>
        <div className="modal-dialog">
          <div className="modal-content p-2">
            <div className="modal-body">
              <h1 className="mt-5 fs-1 justify-content-center text-center">
                {title}
              </h1>
              <DarkStar />
              <div className="modalImg">
                <img src={src} />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                quam perspiciatis, similique unde vero obcaecati dolor
                laudantium perferendis libero provident nemo vel eos doloremque
                fuga sed, molestiae culpa tenetur voluptatum?
              </p>
            </div>

            <div className="modal-footer">
              <button type="button" data-bs-dismiss="modal">
                Close window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, // Ensure 'title' is a required string
};

export default Modal;
