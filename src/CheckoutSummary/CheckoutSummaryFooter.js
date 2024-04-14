import { useCallback } from "react";
import "./CheckoutSummaryFooter.css";

const FrameComponent = () => {
  const onChangeTextClick = useCallback(() => {
    // Please sync "iPhone 14 - 63" to the project
  }, []);

  return (
    <div className="payment-input-wrapper">
      <div className="payment-input">
        <img
          className="divider-icon"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
        <div className="shipping-label">
          <div className="checkbox-container">
            <b className="shipping-address">Shipping Address</b>
            <div className="checkbox-wrapper">
              <img
                className="checkbox-icon"
                loading="lazy"
                alt=""
                src="/checkbox.svg"
              />
            </div>
          </div>
          <div className="delivery-input">
            <div className="bay-brook-sharps">{`12, Bay brook, Sharps Rd, Keilor East, `}</div>
            <div className="melbourne-australia">Melbourne, Australia</div>
          </div>
        </div>
        <div className="change-button">
          <div className="change">Change</div>
          <img className="divider-icon1" alt="" src="/divider-1.svg" />
        </div>
        <b className="payment">Payment</b>
        <div className="total-amount-label">
          <div className="payment-method-parent">
            <div className="payment-method">
              <img className="bg-icon" alt="" src="/bg.svg" />
              <img
                className="icon-mastercard"
                loading="lazy"
                alt=""
                src="/icon-mastercard.svg"
              />
              <div className="m-c-label">
                <div className="change-icon-button">
                  <div className="master-card">Master Card</div>
                  <div className="payment-method-label">**** **** **** 543</div>
                </div>
              </div>
            </div>
            <div className="change1" onClick={onChangeTextClick}>
              Change
            </div>
          </div>
          <img
            className="checkbox-icon1"
            loading="lazy"
            alt=""
            src="/checkbox-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;