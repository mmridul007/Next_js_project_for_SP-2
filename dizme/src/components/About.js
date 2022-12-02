import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={27} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Research
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={46} />
                    </h3>
                    <span className="name">
                      I have completed
                      <br />
                      Projects and continue...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I am  the Ralph and Catherine Fisher Professor of Computer Science at the  University of Illinoisat Urbana – Champaign ,and directs the Coordinated Science Laboratory there. Her research concerns , multimedia ,quality of service and middleware`}</span>
                <h3>You can learn anything form me </h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`  Multimedia operating systems.

Multimedia communication protocols.
 QoS middleware and large scale distributed systems.

Multimedia security and trustworthy computing systems.

 Advanced tele-immersive and multimedia applications.

High speed QoS routing and ad hoc networks`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Mail Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;

