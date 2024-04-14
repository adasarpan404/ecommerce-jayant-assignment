import { useCallback } from "react";
import FrameComponent1 from "./CheckoutOrderAcceptedHeader";
import FrameComponent from "./CheckoutOrderAcceptedDescription";
import "./CheckoutOrderAccepted.css";

const CheckoutOrderAccepted = () => {
  const onPrimaryButtonSmallClick = useCallback(() => {
    // Please sync "iPhone 14 - 59" to the project
  }, []);

  return (
    <div className="checkoutorderaccepted">
      <FrameComponent1 />
      <section className="checkoutorderaccepted-inner">
        <FrameComponent />
      </section>
      <div className="primary-button-small-wrapper">
        <button
          className="primary-button-small"
          onClick={onPrimaryButtonSmallClick}
        >
          <img className="button-icon" alt="" src="/button.svg" />
          <b className="track-order">TRACK ORDER</b>
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderAccepted;