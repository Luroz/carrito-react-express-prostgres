import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {

  const [tipoActual, setTipoActual] = React.useState('ninguno');

  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Catalog</h2>
          <h4 className="empty-cart">Is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Catalog</h2>
        <button
          className="btn clear-btn"
          onClick={() => setTipoActual('fruta')}
        >
          Fruits
        </button>
        <button
          className="btn clear-btn"
          onClick={() => setTipoActual('vegetal')}
        >
          Vegetables
        </button>
      </header>
      {/* cart items */}
      {
        tipoActual === 'ninguno' && (
          <article>
            {cart.map(item => {
              return <CartItem key={item.id} {...item} />;
            })}
          </article>
        )
      }
      {
        tipoActual === 'fruta' && (
          <article>
            {cart.filter(item => item.type === 'fruta').map(item => {
              return <CartItem key={item.id} {...item} />;
            })}
          </article>
        )
      }
      {
        tipoActual === 'vegetal' && (
          <article>
            {cart.filter(item => item.type === 'vegetal').map(item => {
              return <CartItem key={item.id} {...item} />;
            })}
          </article>
        )
      }

      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
