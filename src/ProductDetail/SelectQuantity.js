import { useCallback } from "react";
import "./SelectQuantity.css";

const FrameComponent = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "iPhone 14 - 54" to the project
  }, []);

  return (
    <div className="product-details-inner1">
      <div className="frame-parent5">
        <div className="frame-parent6">
          <div className="frame-wrapper2">
            <div className="bg-parent">
              <img className="bg-icon" alt="" src="/bg.svg" />
              <div className="shape-wrapper">
                <img className="shape-icon" alt="" src="/shape.svg" />
              </div>
              <div className="div5">1</div>
              <div className="shape-pair-wrapper">
                <div className="shape-pair">
                  <img className="shape-icon1" alt="" src="/shape-1.svg" />
                  <img className="shape-icon2" alt="" src="/shape-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="recommendations-parent"
            onClick={onGroupButtonClick}
          >
            <img className="recommendations-icon" alt="" src="/vector-2.svg" />
            <div className="add-to-cart">ADD TO CART</div>
          </button>
        </div>
        <b className="you-may-also">You May Also Like</b>
      </div>
    </div>
  );
};

export default FrameComponent;

