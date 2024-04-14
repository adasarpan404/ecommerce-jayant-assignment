import "./CheckoutSummaryDescription.css";

const AddressInput = () => {
  return (
    <div className="address-input">
      <div className="address-input-inner">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="size-label-parent">
              <img className="size-label-icon" alt="" src="/size-label.svg" />
              <img className="vector-icon" alt="" src="/vector-1.svg" />
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/group-9450.svg"
              />
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/group-9449.svg"
              />
              <img className="group-icon" alt="" src="/group-9446.svg" />
            </div>
          </div>
          <div className="shipping-address-input">
            <div className="melbourne-address">
              <div className="address">Address</div>
            </div>
            <div className="payments">Payments</div>
            <div className="summary1">Summary</div>
          </div>
        </div>
      </div>
      <div className="frame-group">
        <img className="rectangle-icon" alt="" src="/rectangle-3412.svg" />
        <img
          className="vector-icon1"
          loading="lazy"
          alt=""
          src="/vector-2@2x.png"
        />
        <img
          className="jennifer-schmidt-0xvrbly73rw-u-icon"
          alt=""
          src="/jenniferschmidt0xvrbly73rwunsplash.svg"
        />
        <div className="master-card-icon">
          <div className="nescafe-coffee-black-roast-parent">
            <div className="nescafe-coffee-black">
              Nescafe coffee black roast
            </div>
            <div className="button-medium-red">
              <div className="div">₹565.0</div>
              <div className="size-l">Size : L</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInput;