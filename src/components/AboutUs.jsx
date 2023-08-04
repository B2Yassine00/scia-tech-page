import "../styles/about-us.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import insole1 from '../assets/insole1.jpg';
import insole2 from '../assets/insole2.jpg';

function TitleDiv() {
  return (
    <>
      <div className="SizeDiv2">
        <div className="row">
          <div className="col">
            <h1 className="AboutTitle">About Us</h1>
            <br />
            <h3 className="AboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          </div>
          <div className="col">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={insole1} alt="foot" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={insole2} alt="foot" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={insole2} alt="foot" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleDiv;
