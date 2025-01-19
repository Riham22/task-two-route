import DarkStar from "../DarkStar";
const Contact = () => {
  return (
    <>
      <div className="contact ">
        <h1 className=" ">CONTACT ME</h1>
        <DarkStar />
        <form>
          <input placeholder="Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <input placeholder="Message" />
          <button className="buttonOfSend">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
