import FrameComponent1 from "./RegisterInputs";
import FrameComponent from "./RegisterButton";
import "./RegisterHeadings.css";

const SignupForm = () => {
  return (
    <div className="signup-form">
      <div className="path0-wrapper">
        <img className="path0-icon" loading="lazy" alt="" src="/path0.svg" />
      </div>
      <header className="lets-create-your-profile-wrapper">
        <h1 className="lets-create-your-container">
          <p className="lets">Let’s</p>
          <p className="create-your-profile">Create Your Profile</p>
        </h1>
      </header>
      <main className="rectangle-parent">
        <div className="frame-child" />
        <FrameComponent1 />
        <button className="rectangle-group">
          <div className="frame-item" />
          <img className="frame-inner" alt="" src="/group-82.svg" />
          <div className="register-button">
            <b className="enter-referral-code">Enter Referral Code</b>
          </div>
        </button>
        <FrameComponent />
      </main>
    </div>
  );
};

export default SignupForm;