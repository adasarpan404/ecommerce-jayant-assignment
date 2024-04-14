import { useState, useEffect } from "react";
import "./otpInput.css";
import { useLocation } from 'react-router-dom';


const FrameComponent = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const location = useLocation()

  useEffect(() => {
    setPhone(location.state.key)
    console.log(location)
  }, [location])
  const handleChange = e => {
    setOTP(e.target.value)
    if (otp.length === 6) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "phone": phone,
        "OTP": otp
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:4000/auth/verify-otp", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }
  }
  return (
    <div className="frame-parent">
      <div className="rectangle-parent">
        <input type="text" class="form-control" placeholder="Enter Your six digit OTP" value={otp} aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} />
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
        >
          <i className="edit-phone-number">Edit Phone Number</i>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
