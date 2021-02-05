import "./Sidebar.css";
import products from "../config/data.json";

function clickHandler(cb, filters, size) {
  let filterProducts = [];
  filters.forEach((filter) => {
    products.products.forEach((product) => {
      if (product.availableSizes.includes(filter)) {
        filterProducts.push(product);
      }
    });
  });
  cb(filterProducts, size);
}

function Sidebar(props) {
  const { filterHandler, filters } = props;
  return (
    <div className="sidebar">
      <h3>Sizes:</h3>
      <nav>
        <ul className="flex flex-wrap">
          {["XS", "S", "M", "ML", "L", "XL", "XXL"].map((filter) => {
            return (
              <li
                className={filters.includes(filter) ? "active-filter" : "f"}
                onClick={() => clickHandler(filterHandler, filters, filter)}
              >
                {filter}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
