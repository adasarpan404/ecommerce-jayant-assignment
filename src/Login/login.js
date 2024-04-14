import FrameComponent from "./loginIcons";
import logo from "./logo.png";
import "./login.css";

const SignUp = () => {
  return (
    <div className="sign-up-1">
      <img className="path0-icon" loading="lazy" alt="" src={logo} />
      <section className="sign-up-1-inner">
        <div className="enter-number-parent">
          <div className="enter-number d-flex flex-column">
            <h1 className="enter-your-mobile">Enter Your Mobile Number</h1>
          </div>
          <FrameComponent />
          <div className="checkbox">
            <div className="by-clicking-i-container">
              <p className="by-clicking-i">By Clicking, I accept the</p>
              <p className="terms-of-services">Terms of Services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;