import { useCallback } from "react";
import FrameComponent2 from "./CheckoutPaymentHeader";
import FrameComponent1 from "./CheckoutPaymentDescription";
import FrameComponent from "./CheckoutPaymentFooter";
import "./CheckoutPayment.css";

const CheckoutPayment = () => {
  const onButtonMediumRedClick = useCallback(() => {
    // Please sync "iPhone 14 - 57" to the project
  }, []);

  return (
    <div className="checkoutpayment">
      <FrameComponent2 />
      <div className="checkoutpayment-inner">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img
            className="process-3-icon"
            loading="lazy"
            alt=""
            src="/process-3.svg"
          />
          <div className="vector-group">
            <img className="vector-icon1" alt="" src="/vector-1.svg" />
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/group-9449.svg"
            />
          </div>
          <img className="frame-item" alt="" src="/group-9446.svg" />
        </div>
      </div>
      <div className="checkoutpayment-child">
        <div className="frame-parent">
          <div className="address-wrapper">
            <div className="address">Address</div>
          </div>
          <div className="payments">Payments</div>
          <div className="summary">Summary</div>
        </div>
      </div>
      <FrameComponent1 />
      <div className="lipsum-wrapper">
        <div className="lipsum">Lipsum</div>
      </div>
      <div className="field-wrapper">
        <img className="field-icon" loading="lazy" alt="" src="/field.svg" />
      </div>
      <div className="card-number-wrapper">
        <div className="card-number">Card Number</div>
      </div>
      <div className="frame-div">
        <div className="frame-group">
          <div className="wrapper">
            <div className="div">4560 5644 3224 543</div>
          </div>
          <img
            className="icon-mastercard"
            loading="lazy"
            alt=""
            src="/icon-mastercard.svg"
          />
        </div>
      </div>
      <div className="field-container">
        <img className="field-icon1" alt="" src="/field-1.svg" />
      </div>
      <FrameComponent />
      <div className="save-card-details-btn">
        <button className="buttonmediumred" onClick={onButtonMediumRedClick}>
          <img className="button-icon" alt="" src="/button.svg" />
          <b className="next">NEXT</b>
        </button>
      </div>
    </div>
  );
};

export default CheckoutPayment;