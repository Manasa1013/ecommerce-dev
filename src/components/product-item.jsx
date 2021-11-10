export const ProductItem = ({
  id,
  name,
  price,
  discount,
  image,
  inStock,
  level,
  fastDelivery,
  isAddedMsg,
  isWished,
  count,
  addCartClickHandler,
  wishClickHandler
}) => {
  const addIcon = "fas fa-cart";
  const wishIcon = "far fa-heart fa-lg";
  const solidWishIcon = "fas fa-heart fa-lg";
  return (
    <div>
      <li key={id} className="list-item-flex">
        <div className="p-10 grid grid-cols-1">
          <div className="card__container shadow-lg">
            <div className="img__container full-width">
              <img
                // className="w-full"
                width="100%"
                height="auto"
                // src="https://m.media-amazon.com/images/I/61eqn5KplVL._AC_UL480_FMwebp_QL65_.jpg"
                src={image}
                alt="product"
              />
            </div>
            {inStock && <span className="badge__text position">NEW</span>}
            <button
              style={{
                color: isWished ? "var(--image-other-green)" : "inherit",
                backgroundColor: isWished ? "white" : "inherit"
              }}
              className="pos"
              onClick={() => wishClickHandler()}
              id="pos"
            >
              <em className={isWished ? solidWishIcon : wishIcon}></em>
            </button>

            <div className="product--desc">
              <div className="product--name">{name}</div>
              <p className="product--info">
                {inStock && <div> In Stock </div>}
                {!inStock && <div> Out of Stock </div>}
                <div>{level}</div>
                {fastDelivery ? (
                  <div> Fast Delivery </div>
                ) : (
                  <div> 3 days minimum </div>
                )}
              </p>
              <div className="product--price">
                <span className="price">₹{price}</span>
                <span className="strike--price">
                  ₹{parseInt(price, 10) + discount}
                </span>
                <span className="discount">(₹ {`${discount}`} OFF)</span>
              </div>
            </div>
            <div className="button__container">
              <button
                type="button"
                className="button button__primary"
                onClick={() => addCartClickHandler()}
              >
                {!isAddedMsg ? `Add to Cart` : `Go to Cart`}
              </button>
            </div>
            <small className="align-left">{count > 0 && `Qty: ${count}`}</small>
          </div>
        </div>
      </li>
    </div>
  );
};
