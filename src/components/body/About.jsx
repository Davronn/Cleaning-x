import "./Body.scss";
import { body1, call, card1 ,card2,card3} from "../../assets/images/index";

function About() {
  return (
    <>
      <div className="About">
        <div className="head">
          <div className="container">
            <div className="head_aside">
              <h1>Quality cleaning for your home</h1>
              <p className="hp">
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="btns">
                <button className="btn1">Get a free quote</button>
                <div className="call">
                  <img src={call} alt="" />
                  <div>
                    <p className="call-name">CALL US NOW</p>
                    <p className="call-num">(414) 567 - 2109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-img">
            <img src={body1} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="aboutus">
            <div className="aboutus_head">
              <h2>About Us</h2>
              <p className="aup">
                Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
                neque nisi felis non ultrices massa id egestas quam velit
                pretium nu.
              </p>
            </div>
            <div className="aboutus_cards">
              <div className="aboutus_cards-card">
                <img src={card1} alt="" />
                <p className="aucp">1. Schedule online</p>
                <p className="aucpl">
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
              <div className="aboutus_cards-card">
                <img src={card2} alt="" />
                <p className="aucp">2. Pay online easliy</p>
                <p className="aucpl">
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
              <div className="aboutus_cards-card">
                <img src={card3} alt="" />
                <p className="aucp">3. Get your house cleaned</p>
                <p className="aucpl">
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
            <div className="aboutus_btns"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
