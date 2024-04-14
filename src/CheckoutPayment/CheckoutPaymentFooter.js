import "./CheckoutPaymentFooter.css";

const FrameComponent = () => {
  return (
    <section className="checkoutpayment-inner1">
      <div className="frame-parent2">
        <div className="expiry-date-parent">
          <div className="expiry-date">Expiry Date</div>
          <div className="parent">
            <div className="div1">09 / 20</div>
            <img className="field-icon2" alt="" src="/field-2.svg" />
          </div>
          <div className="radio-button-parent">
            <img
              className="radio-button-icon"
              loading="lazy"
              alt=""
              src="/radio-button.svg"
            />
            <div className="save-this-card-details-wrapper">
              <div className="save-this-card">Save this card details</div>
            </div>
          </div>
        </div>
        <div className="cvv-parent">
          <div className="cvv">CVV</div>
          <div className="card-holder-name-field">
            <div className="expiry-date-field">467</div>
            <img className="field-icon3" alt="" src="/field-3.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;