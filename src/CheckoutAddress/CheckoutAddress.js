import { useCallback } from "react";
import FrameComponent2 from "./CheckoutAddressHeader";
import FrameComponent1 from "./CheckoutAddressDescription";
import FrameComponent from "./CheckoutAddressFooter";
import "./CheckoutAddress.css";

const CheckoutAddress = () => {
  const onButtonMediumRedClick = useCallback(() => {
    // Please sync "iPhone 14 - 56" to the project
  }, []);

  return (
    <div className="checkoutaddress">
      <FrameComponent2 />
      <main className="checkoutaddress-inner">
        <section className="frame-parent">
          <FrameComponent1 />
          <div className="x-y-z-road-delhi-field">
            <div className="street-2">Street 2</div>
            <div className="xyz-road-parent">
              <div className="xyz-road">XYZ Road</div>
              <img className="field-icon" alt="" src="/field-1.svg" />
            </div>
          </div>
          <div className="x-y-z-road-delhi-field1">
            <div className="city">City</div>
            <div className="delhi-parent">
              <div className="delhi">Delhi</div>
              <img className="field-icon1" alt="" src="/field-2.svg" />
            </div>
          </div>
          <FrameComponent />
          <div className="primary-button">
            <button
              className="buttonmediumred"
              onClick={onButtonMediumRedClick}
            >
              <img className="button-icon" alt="" src="/button.svg" />
              <b className="next">NEXT</b>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckoutAddress;