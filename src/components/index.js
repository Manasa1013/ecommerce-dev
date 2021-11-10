import { ProductItem } from "./product-item";
import { WishlistItem } from "./wishlist-item";
import { FakerProducts } from "../random-data/faker-data";
import { Wishlist } from "./wishlist";

import { ProductList } from "./product-list";
import { useRoute } from "../Contexts/route-context";
import { CartItem } from "./cart-item";
import { Cart } from "./cart";
import { Checkout } from "./checkout";
function Home() {
  const { route, setRoute } = useRoute();
  return (
    <div className="app-body ">
      <div className="button--container justify--spacebtwn">
        <button
          className="button button__primary"
          onClick={() => setRoute("cart")}
        >
          Cart
        </button>
        <button
          className="button button__primary"
          onClick={() => setRoute("products")}
        >
          Products
        </button>
        <button
          className="button button__primary"
          onClick={() => setRoute("checkout")}
        >
          Checkout
        </button>
        <button
          className="button button__primary"
          onClick={() => setRoute("wishlist")}
        >
          Wishlist
        </button>
        <button
          className="button button__primary"
          onClick={() => setRoute("randomdata")}
        >
          Fake data
        </button>
      </div>

      {route === "cart" && <Cart />}
      {route === "products" && <ProductList />}
      {route === "wishlist" && <Wishlist />}
      {route === "checkout" && <Checkout />}
      {route === "randomdata" && <FakerProducts />}
    </div>
  );
}
export {
  Home,
  Checkout,
  ProductItem,
  ProductList,
  WishlistItem,
  Wishlist,
  CartItem,
  Cart
};
