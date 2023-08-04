import "../styles/header.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.png';

function HeaderElement() {
  return (
    <>
    <div className="navigation">
        <nav className="navbar">

            <div className="left">

                <img src={logo} width="100rem" alt="" />

            </div>

            <div className="right">

                <input type="checkbox" id="check"></input>

                <label htmlFor="check" className="checkBtn">

                    <i className="fa fa-bars"></i>

                </label>

                <ul className="list">

                    <li><a href="#">Home</a></li>

                    <li><a href="#">About</a></li>

                    <li><a href="#">Services</a></li>

                    <li><a href="#">Product</a></li>

                    <li className="contact"><a href="#">Contact Us</a></li>

                </ul>

            </div>

        </nav>
    </div>
    </>
  );
}

export default HeaderElement;
