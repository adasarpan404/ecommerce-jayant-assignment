import OTPHeading from "./otpHeading";
import OTPInput from "./otpInput";
import "./otpMain.css";

const otpMain = () => {
  return (
    <div className="sign-up-otp">
      <OTPHeading />
      <section className="sign-up-otp-inner">
        <OTPInput />
      </section>
      <div className="terms-and-conditions-wrapper">
        <i className="terms-and-conditions">Terms and conditions</i>
      </div>
    </div>
  );
};

export default otpMain;