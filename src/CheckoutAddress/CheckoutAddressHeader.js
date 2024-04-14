import { useCallback } from "react";
import "./CheckoutAddressHeader.css";

const FrameComponent2 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "ShoppingCart" to the project
  }, []);

  return (
    <div className="devicedevice-frame-components-parent">
      <header className="devicedevice-frame-components">
       
      </header>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="frame-child" />
        <img className="arrow-left-icon" alt="" src="/arrowleft.svg" />
        <div className="checkout">Checkout</div>
      </div>
    </div>
  );
};

export default FrameComponent2;