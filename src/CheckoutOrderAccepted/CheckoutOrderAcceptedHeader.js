import { useCallback } from "react";
import "./CheckoutOrderAcceptedHeader.css";

const FrameComponent1 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "CheckoutSummary" to the project
  }, []);

  return (
    <header className="devicedevice-frame-components-parent">
      <div className="devicedevice-frame-components">
       
      </div>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="frame-child" />
        <img className="arrow-left-icon" alt="" src="/arrowleft.svg" />
        <div className="checkout">Checkout</div>
      </div>
    </header>
  );
};

export default FrameComponent1;