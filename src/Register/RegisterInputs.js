import "./RegisterInputs.css";

const FrameComponent1 = () => {
  return (
    <form className="frame-parent">
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <input className="full-name" placeholder="Full Name" type="text" />
      </div>
      <div className="group-div">
        <div className="frame-child1" />
        <input className="email" placeholder="Email" type="text" />
      </div>
      <div className="male-female">
        <div className="gender-wrapper">
          <b className="gender">Gender</b>
        </div>
        <div className="email-input">
          <div className="rectangle-parent1">
            <div className="frame-child2" />
            <div className="ellipse-parent">
              <div className="ellipse-div" />
              <img className="male-1364-icon" alt="" src="/male1364.svg" />
            </div>
            <b className="male">Male</b>
          </div>
          <button className="group-button">
            <div className="frame-child3" />
            <div className="page-1-wrapper">
              <img className="page-1-icon" alt="" src="/page1.svg" />
            </div>
            <b className="female">Female</b>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent1;