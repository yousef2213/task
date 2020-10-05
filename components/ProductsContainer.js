import React from "react";
import CartItem from "./ProductItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";
const ProductsItemContainer = ({ cart = [], total, dispatch }) => {
  
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* products header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* products items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* products footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear products
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { Products, total } = store;
  return { Products, total };
}
export default connect(mapStateToProps)(ProductsItemContainer);
