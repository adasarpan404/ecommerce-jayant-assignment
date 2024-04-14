import "./Description.css";

const Description = () => {
  return (
    <section className="currency-symbol">
      <div className="size-selector">
        <div className="frame-parent">
          <div className="star-wrapper">
            <img
              className="star-icon"
              loading="lazy"
              alt=""
              src="/star@2x.png"
            />
          </div>
          <div className="div">4.2+</div>
          <div className="price-container">
            <div className="reviews">Reviews</div>
          </div>
        </div>
        <h3 className="broccoli">Broccoli</h3>
        <div className="add-to-cart-label">
          <div className="lorem-ipsum-is">{`Lorem Ipsum is simply dummy text of the printing and `}</div>
          <div className="typesetting-industry-lorem">{`typesetting industry. Lorem Ipsum has been the `}</div>
          <div className="industrys-standard-dummy">
            industry's standard dummy text ever since the 1500s,
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;