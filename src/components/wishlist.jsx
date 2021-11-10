import React from "react";
// import { products } from "../data/data";
import { WishlistItem } from "./wishlist-item";
import { useCart } from "../Contexts/cart-context";
import { useRoute } from "../Contexts/route-context";
export function Wishlist() {
  const { state, dispatch } = useCart();
  const { setRoute } = useRoute();
  const wishListLength = state.wishList.length;
  return (
    <div>
      <h2>
        {wishListLength > 0
          ? `Wishlisted(${wishListLength})`
          : `Wishlist is empty `}
      </h2>
      <ul>
        {state.wishList.map(
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
              <WishlistItem
                key={id}
                id={id}
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
                removeWishHandler={() => {
                  dispatch({ type: "EDIT_PROD_WISH", payload: newItem });
                  dispatch({ type: "REMOVE_FROM_WISH", payload: newItem });
                }}
                moveToCartHandler={() => {
                  dispatch({ type: "EDIT_PROD_WISH", payload: newItem });
                  dispatch({ type: "REMOVE_FROM_WISH", payload: newItem });
                  //here is the prob,in remove wish Item,
                  //the isWished is not made false,just filtered data
                  //based on id
                  dispatch({ type: "EDIT_PROD_CART", payload: newItem });
                  dispatch({ type: "ADD_TO_CART", payload: newItem });
                }}
              />
            );
          }
        )}
      </ul>
    </div>
  );
}
