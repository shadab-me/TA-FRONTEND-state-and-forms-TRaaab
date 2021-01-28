import data from "../config/data.json";

function Match(props) {
  let allPeople = data.reduce((house) => console.log(house.people));
  console.log(allPeople);

  let result = "hdh" ? "This is a Match Win Win" : "Try Again";

  console.log(
    props.userSelected && props.houseSelected !== ""
      ? result
      : "Please Select house and people"
  );

  return (
    <div className="isMatch">
      <h1>
        {props.userSelected && props.houseSelected !== ""
          ? result
          : "Please Select house and people"}
      </h1>
    </div>
  );
}

export default Match;
