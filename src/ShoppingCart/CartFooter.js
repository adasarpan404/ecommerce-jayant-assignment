import CartProduct from "./CartProduct";
import "./CartFooter.css";

const FrameComponent = () => {
  return (
    <div className="frame-parent1">
      <CartProduct
        vector="/vector-2.svg"
        vectorIconPadding="0px var(--padding-base) 0px var(--padding-4xs)"
        propPadding="unset"
      />
      <div className="total-parent">
        <div className="total">Total</div>
        <div className="frame-parent2">
          <div className="shipping-label-parent">
            <div className="shipping-label">
              <div className="sub-total-parent">
                <div className="sub-total">Sub Total</div>
                <div className="shipping">Shipping</div>
              </div>
              <div className="apply-button">
                <div className="checkout-button">
                  <img
                    className="line-icon"
                    loading="lazy"
                    alt=""
                    src="/line.svg"
                  />
                  <img
                    className="line-icon1"
                    loading="lazy"
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="div2">₹699.00</div>
              <div className="wrapper">
                <div className="div3">₹0</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="field-parent">
              <img className="field-icon" alt="" src="/field.svg" />
              <div className="enter-voucher-code-wrapper">
                <div className="enter-voucher-code">Enter Voucher Code</div>
              </div>
              <div className="button-apply">
                <img
                  className="button-apply-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-9.svg"
                />
                <div className="apply">APPLY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;