import { useState, useCallback } from "react";
import "./RegisterButton.css";

const FrameComponent = () => {
  const [groupIconChecked, setGroupIconChecked] = useState(true);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "loading" to the project
  }, []);

  return (
    <section className="frame-wrapper">
      <div className="frame-group">
        <div className="frame-container">
          <div className="frame-div">
            <input
              className="group-input"
              checked={groupIconChecked}
              type="checkbox"
              onChange={(event) => setGroupIconChecked(event.target.checked)}
            />
            <div className="i-agree-to-the-terms-conditi-wrapper">
              <div className="i-agree-to-container">
                <span>{`I agree to the `}</span>
                <span className="terms-conditions">{`Terms & Conditions`}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="rectangle-parent2" onClick={onGroupButtonClick}>
          <div className="frame-child4" />
          <i className="register">Register</i>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;