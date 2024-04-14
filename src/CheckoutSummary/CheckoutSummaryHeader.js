import { useCallback } from "react";
import "./CheckoutSummaryHeader.css";

const FrameComponent1 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "CheckoutPayment" to the project
  }, []);

  return (
    <div className="devicedevice-frame-components-parent">
      <header className="devicedevice-frame-components">
       
      </header>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="frame-child" />
        <img
          className="arrow-left-icon"
          loading="lazy"
          alt=""
          src="/arrowleft.svg"
        />
        <div className="summary">Summary</div>
      </div>
    </div>
  );
};

export default FrameComponent1;