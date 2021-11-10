import { React } from "react";
import { ProductItem } from "./product-item";
// import { products } from "../data/data";
import { useRoute } from "../Contexts/route-context";
import { useCart } from "../Contexts/cart-context";
export const ProductList = () => {
  const { state, dispatch } = useCart();
  const { setRoute } = useRoute();
  function addCartHandler(newItem) {
    if (newItem.isAddedMsg === true) {
      setRoute("cart");
    } else {
      dispatch({ type: "EDIT_PROD_CART", payload: newItem });
      dispatch({ type: "ADD_TO_CART", payload: newItem });
    }
  }
  function editWishHandler(newItem) {
    dispatch({ type: "EDIT_PROD_WISH", payload: newItem });
    if (newItem.isWished === true) {
      dispatch({ type: "REMOVE_FROM_WISH", payload: newItem });
    } else {
      dispatch({ type: "SET_WISHITEMS", payload: newItem });
    }
  }
  // icon2
  return (
    <div className="grid grid-cols-auto gap-5">
      {state.stateProducts.map(
        ({
          id,
          name,
          price,
          discount,
          count,
          image,
          level,
          inStock,
          fastDelivery,
          isAddedMsg,
          isWished
        }) => {
          let newItem = {
            id: id,
            name: name,
            price: price,
            discount: discount,
            count: count,
            image: image,
            level: level,
            inStock: inStock,
            fastDelivery: fastDelivery,
            isAddedMsg: isAddedMsg,
            isWished: isWished
          };
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              isWished={isWished}
              isAddedMsg={isAddedMsg}
              price={price}
              discount={discount}
              image={image}
              inStock={inStock}
              level={level}
              fastDelivery={fastDelivery}
              addCartClickHandler={() => {
                addCartHandler(newItem);
              }}
              wishClickHandler={() => {
                editWishHandler(newItem);
              }}
            />
          );
        }
      )}
    </div>
  );
};
