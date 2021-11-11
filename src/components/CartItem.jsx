export const CartItem = ({
  id,
  name,
  price,
  count,
  isAddedMsg,
  discount,
  image,
  level,
  inStock,
  fastDelivery,
  isWished,

  incClickHandler,
  decClickHandler,
  removeClickHandler,
  moveWishClickHander
}) => {
  const plusIcon = "far fa-plus-square fa-lg";
  const minusIcon = "far fa-minus-square fa-lg";
  // const wishIcon = "far fa-heart fa-lg";
  // const solidWishIcon = "fas fa-heart fa-lg";
  // const addIcon = "fas fa-cart fa-lg";
  return (
    <li key={id} className="list-item-flex">
      <div className="grid--container">
        <div className="child-grid-1">
          <div className="card box-shadow">
            <div className="img--container">
              <img
                // className="product--img"
                width="100%"
                height="auto"
                // src="https://m.media-amazon.com/images/I/61eqn5KplVL._AC_UL480_FMwebp_QL65_.jpg"
                src={image}
                alt="cart item"
              />
            </div>
            <div className="flex--container">
              <button
                type="button"
                className=".button button__icon"
                style={{ color: "var(--color-dgreen)" }}
                onClick={() => incClickHandler()}
              >
                <em className={plusIcon}></em>
              </button>
              <button
                type="button"
                className=".button button__icon"
                style={{ color: "var(--color-dgreen)" }}
                onClick={() => decClickHandler()}
              >
                <em className={minusIcon}></em>
              </button>
            </div>
            <div className="flex--container">
              <button
                type="button"
                className=".button button__secondary"
                onClick={() => removeClickHandler()}
              >
                Remove
              </button>
              <button
                type="button"
                className=".button button__primary"
                onClick={() => moveWishClickHander()}
              >
                Move to WishList
              </button>
            </div>
            <div className="product--description">
              <span className="product-name">{name}</span>
              <br></br>
              <span className="product-info">Pantry</span>
              <br></br>
              <span className="price">
                ₹{price}
                <span className="strike--price">₹{price + 50}</span>
                <span className="discount">(₹ 50 OFF)</span>
              </span>
            </div>
            <small className="align-left">{count > 0 && `Qty: ${count}`}</small>
          </div>
        </div>
      </div>
    </li>
  );
};
