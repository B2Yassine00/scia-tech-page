import "../styles/title-div.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import foot from '../assets/foot-header.png';

function TitleDiv() {
  return (
    <>
    <div className="Nebula">
        <div className="SizeDiv1">
                <div class="row">
                    <div class="col">
                    <h1 className="BigTitle">Scia-Tech, Your Innovative Sciatica Solution.</h1>
                    <br />
                    <h3 className="SmallTitle">Your Innovative Sciatica.</h3>
                    <h3 className="SmallTitle2">Unlocking Relief, Empowering lives.</h3>
                    <br />
                    <br />
                    <button className="GetTouch">
                        Get In Touch   <i id="IconGetTouch" class="fa-solid fa-circle-chevron-right"></i>
                    </button>
                    </div>
                    <div class="col second">
                        <img className="front-image" src={foot} alt="foot" />
                    </div>
                </div>
        </div>
    </div>
    </>
  );
}

export default TitleDiv;
