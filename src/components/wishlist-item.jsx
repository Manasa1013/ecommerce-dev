export const WishlistItem = ({
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
  removeWishHandler,
  moveToCartHandler,
  clickHandlerThree,
  clickHandlerFour
}) => {
  const plusIcon = "far fa-plus-square";
  const minusIcon = "far fa-minus-square";
  const wishIcon = "far fa-heart fa-lg";
  const solidWishIcon = "fas fa-heart fa-lg";
  const addIcon = "fas fa-cart";
  return (
    <li key={id} className="list-item-flex">
      <div className="grid--container">
        <div className="child-grid-1">
          <div className="card box-shadow">
            <div className="img--container">
              <img
                width="100%"
                height="auto"
                // className="product--img"
                // src="https://m.media-amazon.com/images/I/61eqn5KplVL._AC_UL480_FMwebp_QL65_.jpg"
                src={image}
                alt="wishlisted item"
              />
              <button
                style={{
                  color: isWished ? "var(--image-other-green)" : "inherit",
                  opacity: "1",
                  backgroundColor: "white",
                  border: "2px solid transparent"
                }}
                className="unselect"
              >
                <em className={isWished ? solidWishIcon : wishIcon}></em>
              </button>
            </div>
            <div className="flex--container">
              <button
                type="button"
                className=".button button__secondary"
                onClick={() => removeWishHandler()}
              >
                Remove from WishList
              </button>
              <button
                type="button"
                className=".button button__primary"
                onClick={() => moveToCartHandler()}
              >
                Move to Cart
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
            {/* <small className="align-left">{count > 0 && `Qty: ${count}`}</small> */}
          </div>
        </div>
      </div>
    </li>
  );
};
