import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-7 offset-sm-1">
            <div className="resume ml-3">
              RESUME <hr className="bg-dark" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-1"></div>
          <div className="col-12 col-sm-7">
            <div className="row mb-5 ml-1">
              <div className="col-12 col-sm-3">
                <div className="aa"> Professional info</div>
              </div>

              <p className="col-12 col-sm-9 p mt-3">
                <div className="row">
                  {" "}
                  Front-end developer with an experience of 1.5 years, currently
                  pursuing a full-stack development course at Lambton College. I
                  possess significant experience in responsive web design,
                  React.js, database design, RDMS, .NET Framework, Entity
                  Framework, Web API services, and Java.
                </div>
              </p>
            </div>
            <hr className="bg-dark" />
            <div className="row mb-5 ml-1">
              <div className="col-12 col-sm-3">
                <div className="aa">Work experience</div>
              </div>

              <p className=" col-12 col-sm-9 p mt-3">
                <b className="row">Frontend React Developer </b>
                <div className="row">Nov 2020 – Mar 2022 </div>
                <div className="row">E.K Solutions, Kathmandu, Nepal</div>
              </p>
            </div>
            <hr className="bg-dark" />
            <div className="row mb-5 ml-1">
              <div className="col-12 col-sm-3">
                <div className="aa">Education</div>
              </div>

              <p className=" col-12 col-sm-9 p mt-3">
                <b className="row">Computer Software & Database Development</b>
                <div className="row">May 2022 – Dec 2023</div>
                <div className="row">Lambton College, Toronto</div>
                <br></br>
                <b className="row">Bachelor in Computer Engineering </b>
                <div className="row">Sep 2015 - Sep 2019</div>
                <div className="row">
                  Kantipur Engineering College, Kathmandu
                </div>
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-1 "></div>
          {/* <div className="col-12 col-sm-2 bg-danger ml-5">
            <div>
              <i class="fa fa-exclamation-circle fa-2x"></i>
            </div>
            <div class="e" style={{ fontSize: 25, marginTop: 5 }}>
              Skills
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Resume;
