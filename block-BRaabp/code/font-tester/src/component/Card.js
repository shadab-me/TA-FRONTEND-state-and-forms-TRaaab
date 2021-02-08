import data from "../config/data.json";
import "./Card.css";
function Card(props) {
  const { size, font } = props;
  return (
    <div className="font-card flex">
      {data.map((fontInfo, i) => {
        return (
          <div key={i} className="inner-card">
            <div className="flex">
              <h3>{fontInfo["font-name"]}</h3>
              <h3>Styles {fontInfo.styles}</h3>
            </div>
            <p className="created-by">{fontInfo["created-by"]}</p>
            <p
              className="font"
              style={{
                fontSize: size + "px",
                fontFamily: fontInfo["font-name"],
              }}
            >
              {" "}
              {font}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
