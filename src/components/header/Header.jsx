import { headerIcon } from "../../assets/images/index";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header_st">
            <img src={headerIcon} alt="" />
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Arcticles</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="header_en">
            <button className="btn_cart">Cart (0)</button>
            <button className="btn_cart-b">Get a free quote</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
