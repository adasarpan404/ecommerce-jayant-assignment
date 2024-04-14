import "./SelectSize.css";

const FrameComponent1 = () => {
  return (
    <section className="frame-section">
      <div className="frame-group">
        <div className="frame-container">
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="parent">
                <div className="div1">₹150.0</div>
                <div className="include-gst-10-wrapper">
                  <div className="include-gst-10">(include GST 10%)</div>
                </div>
              </div>
              <div className="select-size-wrapper">
                <div className="select-size">Select size :</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-parent2">
                <div className="path-3729-parent">
                  <img
                    className="path-3729-icon"
                    loading="lazy"
                    alt=""
                    src="/path-3729.svg"
                  />
                  <div className="div2">250</div>
                </div>
                <div className="vector-parent">
                  <img
                    className="vector-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="div3">500</div>
                </div>
                <div className="vector-group">
                  <img
                    className="vector-icon1"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="div4">1000</div>
                </div>
                <img className="frame-item" alt="" src="/group-37656.svg" />
              </div>
            </div>
          </div>
          <div className="select-quantity-wrapper">
            <div className="select-quantity">Select quantity:</div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent3">
            <div className="vector-container">
              <img className="frame-inner" alt="" src="/rectangle-3422.svg" />
              <img
                className="icon-ionic-ios-arrow-back"
                alt=""
                src="/icon-ioniciosarrowback.svg"
              />
            </div>
            <div className="frame-parent4">
              <div className="g-wrapper">
                <div className="g">₹100/g</div>
              </div>
              <b className="g1">g</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;