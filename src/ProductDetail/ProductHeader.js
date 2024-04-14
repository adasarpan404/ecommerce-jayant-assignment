import { useCallback } from "react";
import CurrencySymbol from "./Description";
import FrameComponent1 from "./SelectSize";
import FrameComponent from "./SelectQuantity";
import "./ProductHeader.css";

const ProductHeader = () => {
  const onGroupClick = useCallback(() => {
    // Please sync "iPhone 14 - 52" to the project
  }, []);

  return (
    <div className="product-details">
      <header className="product-details-inner">
        <img
          className="frame-child"
          alt=""
          src="/group-16.svg"
          onClick={onGroupClick}
        />
      </header>
      <section className="product-details-child">
        <div className="removebg-preview-1-parent">
          <img
            className="removebg-preview-1-icon"
            alt=""
            src=""
          />
          <img
            className="removebg-preview-2-icon"
            loading="lazy"
            alt=""
            src=""
          />
          <img
            className="removebg-preview-3-icon"
            loading="lazy"
            alt=""
            src=""
          />
          <img
            className="removebg-preview-4-icon"
            loading="lazy"
            alt=""
            src=""
          />
        </div>
      </section>
      <div className="broccoli-label-wrapper">
        <div className="broccoli-label">
          <img
            className="broccoli-label-child"
            loading="lazy"
            alt=""
            src="/ellipse-81.svg"
          />
          <img
            className="broccoli-label-item"
            loading="lazy"
            alt=""
            src="/ellipse-82.svg"
          />
          <img
            className="broccoli-label-inner"
            loading="lazy"
            alt=""
            src="/ellipse-82.svg"
          />
          <img
            className="ellipse-icon"
            loading="lazy"
            alt=""
            src="/ellipse-82.svg"
          />
        </div>
      </div>
      <CurrencySymbol />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default ProductHeader;