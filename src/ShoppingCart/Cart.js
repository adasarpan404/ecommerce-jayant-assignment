import { useCallback } from "react";
import FrameComponent2 from "./CartHeader";
import FrameComponent1 from "./CartProduct";
import FrameComponent from "./CartFooter";
import "./Cart.css";

const ShoppingCart = () => {
  const onButtonMediumRedClick = useCallback(() => {
    // Please sync "iPhone 14 - 55" to the project
  }, []);

  return (
    <div className="shoppingcart">
      <FrameComponent2 />
      <main className="shoppingcart-inner">
        <section className="frame-parent">
          <FrameComponent1 vector="/vector-2.svg" />
          <FrameComponent1
            vector="/group-2.svg"
            vectorIconPadding="0px 15px 0px var(--padding-4xs)"
            propPadding="0px 0px 0px var(--padding-12xs)"
          />
          <FrameComponent />
          <div className="buttonmediumred-wrapper">
            <button
              className="buttonmediumred"
              onClick={onButtonMediumRedClick}
            >
              <img className="button-icon" alt="" src="/button.svg" />
              <div className="checkout">CHECKOUT</div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShoppingCart;