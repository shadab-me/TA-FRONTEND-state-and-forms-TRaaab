import React from "react";
import data from "../config/data.json";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "lunch",
    };
  }
  changeHandler = (status) => {
    this.setState({
      active: status,
    });
  };
  render() {
    return (
      <div className="container">
        <header>
          <h1>Our Menu</h1>
          <nav>
            <ul className="flex around-content">
              <li onClick={() => this.changeHandler("all")}>All</li>
              <li onClick={() => this.changeHandler("breakfast")}>Breakfast</li>
              <li onClick={() => this.changeHandler("lunch")}>Lunch</li>
              <li onClick={() => this.changeHandler("shakes")}>shakes</li>
            </ul>
          </nav>
        </header>
        <div className="food-cards flex">
          {this.state.active == "all"
            ? data.map((dish) => <Dish dish={dish} />)
            : data
                .filter((dish) => {
                  return dish.category == this.state.active;
                })
                .map((dish) => {
                  return <Dish dish={dish} />;
                })}
        </div>
      </div>
    );
  }
}

function Dish(props) {
  return (
    <div className="food-card flex">
      <div className="dis-pic">
        <img src="https://food.fnr.sndimg.com/content/dam/images/food/unsized/2016/2/16/0/FND_chefs-picks-comfort-madison-poutine_s4x3.jpg"></img>
      </div>

      <div className="dish-content">
        <div className="title-price flex justify-content">
          <h4>{props.dish.title}</h4>
          <h4>{props.dish.price}</h4>
        </div>
        <hr></hr>
        <p>{props.dish.desc}</p>
      </div>
    </div>
  );
}

export default Menu;
