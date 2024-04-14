import "./CheckoutAddressDescription.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-group">
      <div className="frame-container">
        <div className="frame-wrapper">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img
              className="process-3-icon"
              loading="lazy"
              alt=""
              src="/process-3.svg"
            />
            <img
              className="process-2-icon"
              loading="lazy"
              alt=""
              src="/process-2.svg"
            />
            <img className="frame-item" alt="" src="/group-9446.svg" />
          </div>
        </div>
        <div className="frame-div">
          <div className="address-wrapper">
            <div className="address">Address</div>
          </div>
          <div className="payments">Payments</div>
          <div className="summary">Summary</div>
        </div>
      </div>
      <div className="button-next-medium-red-wrapper">
        <div className="button-next-medium-red">
          <div className="street-name-field">
            <div className="radio-button-delivery">
              <div className="radio-button-wrapper">
                <img
                  className="radio-button-icon"
                  loading="lazy"
                  alt=""
                  src="/radio-button.svg"
                />
              </div>
              <div className="street-1">Street 1</div>
            </div>
          </div>
          <div className="billing-address-is">
            Billing address is the same as delivery address
          </div>
        </div>
      </div>
      <div className="street-lane-parent">
        <div className="street-lane">Street, Lane</div>
        <img className="field-icon2" alt="" src="/field.svg" />
      </div>
    </div>
  );
};

export default FrameComponent1;