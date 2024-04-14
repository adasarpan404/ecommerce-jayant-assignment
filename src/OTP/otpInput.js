import { useCallback } from "react";
import "./otpInput.css";

const FrameComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Sign up 1" to the project
  }, []);

  return (
    <div className="frame-parent">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-inner" />
        <div className="rectangle-div" />
      </div>
      <i className="enter-4-">
        Enter 4 - digit verification code sent to your number.
      </i>
      <div className="frame-wrapper">
        <div className="frame-group">
          <div className="sec-wrapper">
            <i className="sec">30 sec</i>
          </div>
          <i className="resend-otp">Resend OTP</i>
        </div>
      </div>
      <div className="frame-container">
        <div
          className="edit-phone-number-wrapper"
          onClick={onGroupContainerClick}
        >
          <i className="edit-phone-number">Edit Phone Number</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
