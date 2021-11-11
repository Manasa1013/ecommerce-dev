import React from "react";
import { CartItem } from "./cart-item";
// import { products } from "../data/data";
import { useCart } from "../Contexts/cart-context";
import { useRoute } from "../Contexts/route-context";
import { Wishlist } from "./wishlist";
export function Cart() {
  const { state, dispatch } = useCart();
  const { setRoute } = useRoute();
  function moveToWishHandler(newItem) {
    //three cases overall
    //from cart moving to wishList :
    //1) remove it from cart,make products list item 'add to cart' button
    //2) a) if it is not present in wishlist then move it to wishlist
    //b) else don't add ,just pass.
    //3) if it is present
    dispatch({ type: "REMOVE_FROM_CART", payload: newItem });
    dispatch({ type: "EDIT_PROD_WISH", payload: newItem });
    dispatch({ type: "SET_WISHITEMS", payload: newItem });
  }
  const cartLength = state.cart
    .map((item) => item.count)
    .reduce((acc, curr) => (acc = acc + curr), 0);
  const LinkToPages = () => (
    <div className="button--container ">
      <button
        className="button button__secondary hover"
        onClick={() => setRoute("products")}
      >
        <span> Visit Products</span>
      </button>
      <button
        className="button button__secondary hover"
        onClick={() => setRoute("wishlist")}
      >
        <span>Add from Wishlist</span>
      </button>
    </div>
  );
  return (
    <div>
      <h2>
        {cartLength > 0 ? `Items in cart : ${cartLength}` : `Cart is empty `}
      </h2>
      {cartLength === 0 && <LinkToPages />}
      <ul>
        {state.cart.map(
          ({
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
            isWished
          }) => {
            let newItem = {
              id: id,
              name: name,
              price: price,
              count: count,
              isAddedMsg: isAddedMsg,
              discount: discount,
              image: image,
              level: level,
              inStock: inStock,
              fastDelivery: fastDelivery,
              isWished: isWished
            };
            return (
              <CartItem
                key={id}
                name={name}
                price={price}
                count={count}
                isAddedMsg={isAddedMsg}
                discount={discount}
                image={image}
                level={level}
                inStock={inStock}
                fastDelivery={fastDelivery}
                isWished={isWished}
                incClickHandler={() =>
                  dispatch({ type: "INC_IN_CART", payload: newItem })
                }
                decClickHandler={() => {
                  if (newItem.count > 1) {
                    dispatch({ type: "DEC_IN_CART", payload: newItem });
                  } else {
                    dispatch({ type: "REMOVE_FROM_CART", payload: newItem });
                  }
                }}
                removeClickHandler={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: newItem });
                }}
                moveWishClickHander={() => moveToWishHandler(newItem)}
              />
            );
          }
        )}
      </ul>
    </div>
  );
}
