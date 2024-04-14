import { useCallback } from "react";
import "./HomeHeading.css";

const FrameComponent = () => {
  const onVectorIcon2Click = useCallback(() => {
    // Please sync "iPhone 14 - 54" to the project
  }, []);

  return (
    <section className="iphone-14-122-child">
      <div className="frame-group">
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="frame-wrapper1">
                <div className="path0-parent">
                  <img
                    className="path0-icon"
                    loading="lazy"
                    alt=""
                    src="/path0.svg"
                  />
                  <div className="frame-parent3">
                    <div className="group-wrapper">
                      <img
                        className="group-icon"
                        loading="lazy"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className="hebevu-fresh">Hebevu Fresh</div>
                  </div>
                </div>
              </div>
              <div className="vector-parent">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="noida-sector-145-parent">
                  <div className="noida-sector-145">Noida, Sector 145</div>
                  <div className="vector-wrapper">
                    <img className="vector-icon1" alt="" src="/vector-1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="vector-group">
                <img
                  className="vector-icon2"
                  loading="lazy"
                  alt=""
                  src="/vector-2.svg"
                />
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/group-48095632.svg"
                />
                <img
                  className="vector-icon3"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                  onClick={onVectorIcon2Click}
                />
              </div>
            </div>
          </div>
          <img
            className="component-52-icon"
            loading="lazy"
            alt=""
            src="/component-52@2x.png"
          />
        </div>
        <div className="shop-by-categories-wrapper">
          <div className="shop-by-categories">Shop By Categories</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;