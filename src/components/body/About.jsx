import './Body.scss'
import { body1, call } from "../../assets/images/index";

function About() {
  return (
    <>
      <div className="head">
        <div className="container">
          <div className="head_aside">
            <h1>Quality cleaning for your home</h1>
            <p className='hp'>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="btns">
              <button className="btn1">Get a free quote</button>
              <div className="call">
                <img src={call} alt="" />
                <div>
                  <p className='call-name'>CALL US NOW</p>
                  <p className='call-num'>(414) 567 - 2109</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-img">
          <img src={body1} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
