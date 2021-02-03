import React from "react";
import Sidebar from "./Sidebar";
import products from "../config/data.json";
import "./Home.css";
import Cart from "../components/Cart";
import Topbar from "../components/Topbar";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.products,
      productInCart: [],
      isCartActive: true,
    };
  }

  filterHandler = (filterProduct) => {
    this.setState({
      products: filterProduct,
    });
  };

  addToCart = (product) => {
    this.setState({
      productInCart: [...this.state.productInCart, product],
    });
    console.log(this.state.productInCart);
  };
  createUI = (products) => {
    return (
      <main className="products flex  flex-wrap justify-content">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product-img">
                <img
                  src={"/static/products/" + product.sku + "_1" + ".jpg"}
                ></img>
                <span className="shipping">
                  {product.isFreeShipping ? "Free Shipping" : ""}
                </span>
              </div>
              <div className="product-text">
                <h5>{product.title}</h5>
                <hr></hr>
                <h2>
                  <span className="usd">$</span>
                  {product.price}
                </h2>
                <p className="installment">
                  or {product.installments} x{" "}
                  {(product.price / product.installments).toFixed(2)}{" "}
                </p>
              </div>
              <div className="add"></div>
              <button
                onClick={() => this.addToCart(product)}
                className="addtocart"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </main>
    );
  };

  render() {
    return (
      <div className="container flex">
        <section className="size-filter">
          <Sidebar filter={this.filterHandler} state={this.state.products} />
        </section>

        <main className="product-section">
          <div className="top-bar">
            <Topbar state={this.state.products} filter={this.filterHandler} />
          </div>
          {this.createUI(this.state.products)}
        </main>
        <div className="product-cart">
          <Cart products={this.state.productInCart}></Cart>
        </div>
      </div>
    );
  }
}

export default Home;
