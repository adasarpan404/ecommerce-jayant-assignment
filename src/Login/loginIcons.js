import { useCallback, useState } from "react";
import "./loginIcon.css";

const FrameComponent = () => {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value)
  };

  const onClick = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      phone: number,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4000/auth/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const onGroupIconClick = useCallback(() => {
    // Please sync "loading" to the project
  }, []);

  const onGroupIcon1Click = useCallback(() => {
    // Please sync "loading" to the project
  }, []);

  return (
    <div className="frame-parent">
      <div className="frame-group d-flex flex-column">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            +91
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="MobileNumber"
            value={number}
            onChange={handleChange}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={onClick}
          >
            {" "}
            &gt;{" "}
          </button>
        </div>
        <div className="or">
          <div className="youll-receive-4-digit">
            You’ll receive 4-digit code to verify the number
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="or1">------------------ Or ------------------</div>
        </div>
      </div>
      <div className="button-wrapper">
        <div className="button">
          <div className="login-with-social">Login with Social Media</div>
          <div className="button-inner">
            <div className="group-parent">
              <div className="group-icon" onClick={onGroupIconClick}>
                f
              </div>
              <div className="group-icon1" onClick={onGroupIcon1Click}>
                G
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
