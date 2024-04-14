import "./CheckoutAddressFooter.css";

const FrameComponent = () => {
  return (
    <div className="frame-parent1">
      <div className="frame-parent2">
        <div className="state-parent">
          <div className="state">State</div>
          <div className="country-india-fields">
            <div className="delhi1"> Delhi</div>
            <img className="field-icon3" alt="" src="/field-3.svg" />
          </div>
        </div>
        <div className="country-parent">
          <div className="country">Country</div>
          <div className="india-parent">
            <div className="india">India</div>
            <div className="field-wrapper">
              <img
                className="field-icon4"
                loading="lazy"
                alt=""
                src="/field-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent3">
        <div className="radio-button-parent">
          <img
            className="radio-button-icon1"
            loading="lazy"
            alt=""
            src="/radio-button-1.svg"
          />
          <div className="delivery-at-your-doorsteps-wrapper">
            <div className="delivery-at-your">Delivery at your doorsteps.</div>
          </div>
        </div>
        <div className="radio-button-group">
          <img
            className="radio-button-icon2"
            loading="lazy"
            alt=""
            src="/radio-button-2.svg"
          />
          <div className="tack-away-from-e-van-wrapper">
            <div className="tack-away-from">Tack away from E-van.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;