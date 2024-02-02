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
                  Full-stack developer with an experience of 2 years, recently
                  graduated from Lambton College. I possess significant
                  experience in ASP.NET, ASP.NET CORE, C#, SQL SERVER, ENTITY
                  FRAMEWORK, WEB API and REACT. I have knowledge in database
                  design, PL/SQL, OOP concepts, data structures, and control
                  structures.
                </div>
              </p>
            </div>
            <hr className="bg-dark" />
            <div className="row mb-5 ml-1" style={{ display: "flex" }}>
              <div className="col-12 col-sm-3">
                <div className="aa">Work experience</div>
              </div>
              <div>
                <p className=" col-12 col-sm-9 p mt-3">
                  <b className="row">Junior Analyst/Associate </b>
                  <div className="row">Sep 2022 – Dec 2022 </div>
                  <div className="row">
                    Royal Bank of Canada, Toronto, Canada
                  </div>
                </p>

                <p className=" col-12 col-sm-9 p mt-3">
                  <b className="row">Frontend React Developer </b>
                  <div className="row">Nov 2020 – Mar 2022 </div>
                  <div className="row">E.K Solutions, Kathmandu, Nepal</div>
                </p>
              </div>
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
                <div className="row">Dean's Honour List</div>
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
          <div className="col-12 col-sm-2 bg-danger ml-5 mb-5 p-2 skills">
            <div>
              <i class="fa fa-exclamation-circle fa-2x"></i>
            </div>
            <div class="e" style={{ fontSize: 25, marginTop: 5 }}>
              Skills
            </div>
            <div className="mt-2" style={{ justifyContent: "center" }}>
              <div>
                <b>.NET</b>
              </div>
              <div>
                <b>C#</b>
              </div>
              <div>
                <b>MS SQL Server</b>
              </div>
              <div>
                <b>React</b>
              </div>
              <div>
                <b>Javascript</b>
              </div>
              <div>
                <b>Java</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
