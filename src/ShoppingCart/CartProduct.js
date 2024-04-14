import { useMemo } from "react";
import "./CartProduct.css";

const FrameComponent1 = ({ vector, vectorIconPadding, propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: vectorIconPadding,
    };
  }, [vectorIconPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="frame-wrapper" style={frameDivStyle}>
      <div className="frame-group">
        <div className="frame-container">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector-1@2x.png" />
          </div>
          <div className="frame-div">
            <div className="cabbage-parent">
              <div className="cabbage">Cabbage</div>
              <div className="div">₹150.0</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="vector-group" style={frameDiv1Style}>
            <img className="vector-icon2" loading="lazy" alt="" src={vector} />
            <div className="vector-container">
              <img className="vector-icon3" alt="" src="/vector-3.svg" />
              <div className="group-wrapper">
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="div1">1</div>
              <div className="group-container">
                <img
                  className="group-icon1"
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;