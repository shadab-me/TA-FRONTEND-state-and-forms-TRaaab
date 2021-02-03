import "./Sidebar.css";
import products from "../config/data.json";
function clickHandler(size, cb) {
  cb(
    products.products.filter((product) => product.availableSizes.includes(size))
  );
}

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h3>Sizes:</h3>
      <nav>
        <ul className="flex flex-wrap">
          <li onClick={() => clickHandler("XS", props.filter)}>XS</li>
          <li onClick={() => clickHandler("S", props.filter)}>S</li>
          <li onClick={() => clickHandler("M", props.filter)}>M</li>
          <li onClick={() => clickHandler("ML", props.filter)}>ML</li>
          <li onClick={() => clickHandler("L", props.filter)}>L</li>
          <li onClick={() => clickHandler("XL", props.filter)}>XL</li>
          <li onClick={() => clickHandler("XXL", props.filter)}>XXL</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
