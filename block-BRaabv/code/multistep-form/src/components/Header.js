import "./Header.css";

function Header(props) {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <span className={props.step == 1 ? "active" : "primary"}>1</span>
            Sign Up
          </li>
          <li>
            <span className={props.step == 2 ? "active" : "primary"}>2</span>
            Message
          </li>
          <li>
            <span className={props.step == 3 ? "active" : "primary"}>3</span>
            CheckOut
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
