import { useCallback } from "react";
import "./otpHeading.css";

const FrameComponent1 = () => {
  const onButtonBackSolidClick = useCallback(() => {
    // Please sync "Sign up 1" to the project
  }, []);

  return (
    <section className="button-back-solid-parent">
      <div className="button-back-solid" onClick={onButtonBackSolidClick}>
        <div className="group">
          <div className="group1">
            <div className="shape" />
          </div>
        </div>
        <img
          className="icon-chevron-down"
          loading="lazy"
          alt=""
          src="/icon--chevron--down@2x.png"
        />
      </div>
      <div className="enter-the-otp-sent-to-95626535-wrapper">
        <div className="enter-the-otp-container">
          <p className="enter-the-otp">Enter the OTP</p>
          <p className="sent-to-9562653568">Sent To 9562653568</p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;