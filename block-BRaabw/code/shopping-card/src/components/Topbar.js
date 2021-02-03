import "./Top.css";

function clickHandler(event, products, cb) {
  if (event.target.value == "select") {
  }
  if (event.target.value == "high2low") {
    var myObj = products;
    let keysSorted = Object.keys(myObj).sort((a, b) => myObj[a] - myObj[b]);
    console(keysSorted);
  }
  if (event.target.value == "low2high") {
  }
}
function Topbar(props) {
  return (
    <select id="order" onChange={() => clickHandler(props.state, props.filter)}>
      <option value="select">Select</option>
      <option value="high2low">Highest to Lowest</option>
      <option value="low2high">Lowest to Highest</option>
    </select>
  );
}
export default Topbar;
