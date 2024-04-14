import { useCallback } from "react";
import "./CheckoutPaymentDescription.css";

const FrameComponent1 = () => {
  const onPayPalClick = useCallback(() => {
    // Please sync "iPhone 14 - 91" to the project
  }, []);

  const onManagePaymentMethodClick = useCallback(() => {
    // Please sync "iPhone 14 - 62" to the project
  }, []);

  return (
    <section className="frame-section">
      <div className="frame-container">
        <div className="frame-parent1">
          <div className="paypal-parent">
            <img
              className="paypal-icon"
              loading="lazy"
              alt=""
              src="/paypal.svg"
              onClick={onPayPalClick}
            />
            <img
              className="credit-card-icon"
              loading="lazy"
              alt=""
              src="/credit-card.svg"
            />
          </div>
          <div className="name-on-card">Name on Card</div>
        </div>
        <img className="saved-card-icon" alt="" src="/saved-card.svg" />
        <div className="manage-payment-method-wrapper">
          <div
            className="manage-payment-method"
            onClick={onManagePaymentMethodClick}
          >
            Manage Payment Method
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;