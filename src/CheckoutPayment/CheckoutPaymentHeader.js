import { useCallback } from "react";
import "./CheckoutPaymentHeader.css";

const FrameComponent2 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "CheckoutAddress" to the project
  }, []);

  return (
    <section className="devicedevice-frame-components-parent">
      <header className="devicedevice-frame-components">
      </header>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="frame-inner" />
        <img className="arrow-left-icon" alt="" src="/arrowleft.svg" />
        <div className="checkout">Checkout</div>
      </div>
    </section>
  );
};

export default FrameComponent2;