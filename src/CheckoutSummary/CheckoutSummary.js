import { useCallback } from "react";
import FrameComponent1 from "./CheckoutSummaryHeader";
import AddressInput from "./CheckoutSummaryDescription";
import FrameComponent from "./CheckoutSummaryFooter";
import "./CheckoutSummary.css";

const CheckoutSummary = () => {
  const onButtonMediumRedClick = useCallback(() => {
    // Please sync "iPhone 14 - 58" to the project
  }, []);

  return (
    <div className="checkoutsummary">
      <FrameComponent1 />
      <main className="payments-summary-wrapper">
        <section className="payments-summary">
          <AddressInput />
          <FrameComponent />
          <div className="buttonmediumred-wrapper">
            <button
              className="buttonmediumred"
              onClick={onButtonMediumRedClick}
            >
              <img className="button-icon" alt="" src="/button.svg" />
              <b className="next">PAY</b>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckoutSummary;