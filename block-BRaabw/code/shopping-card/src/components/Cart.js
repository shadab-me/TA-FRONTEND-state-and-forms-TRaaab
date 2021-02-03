import "./Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      {props.product
        ? null
        : props.products.map((product) => {
            return (
              <div className="product" key={product}>
                <div className="product-img">
                  <img
                    src={"/static/products/" + product.sku + "_1" + ".jpg"}
                    alt={product.title}
                  ></img>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Cart;
