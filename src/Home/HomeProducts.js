import { useCallback } from "react";
import HomeHeading from "./HomeHeading";
import "./HomeProducts.css";

const HomeProducts = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "iPhone 14 - 52" to the project
  }, []);

  return (
    <div className="iphone-14-122">
      <header className="devicedevice-frame-components">
       
      </header>
      <HomeHeading />
      <div className="iphone-14-122-inner">
        <div className="frame-parent" onClick={onGroupContainerClick}>
          <div className="frame-wrapper">
            <div className="frame-container">
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/frame-48095628@2x.png"
              />
            </div>
          </div>
          <div className="milks-dairy-wrapper">
            <div className="milks-dairy">{`Milks & Dairy`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;

