import { useCallback } from "react";
import "./CartHeader.css";

const FrameComponent2 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "iPhone 14 - 53" to the project
  }, []);

  return (
    <div className="devicedevice-frame-components-parent">
      <header className="devicedevice-frame-components">
      </header>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="frame-child" />
        <div className="arrow-left-parent">
          <img
            className="arrow-left-icon"
            loading="lazy"
            alt=""
            src="/arrowleft.svg"
          />
          <div className="shopping-cart">Shopping Cart</div>
        </div>
        <div className="delete">Delete</div>
      </div>
    </div>
  );
};

export default FrameComponent2;