import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-one row">
          <div className="col-4">
            <h1>LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p> Clark, MO 65243</p>
          </div>
          <div className="col-4">
            <h1>Around the web</h1>
            <div className="social-icons">
              <div className=" ">
                {" "}
                <TiSocialFacebook />
              </div>
              <div>
                {" "}
                <TiSocialTwitter />
              </div>
              <div>
                {" "}
                <TiSocialLinkedin />
              </div>
              <div>
                {" "}
                <TiSocialYoutube />
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <h1>About freelancer</h1>

            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by Hamza Nouh
            </p>
          </div>
        </div>
        <div className="footer-two">Copyright © Hamza Nouh 2022</div>
      </div>
    </>
  );
};

export default Footer;
