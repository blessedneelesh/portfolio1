import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row home">
          <div className="col-12 col-sm-1"></div>
          <div className="col-12 col-sm-4 order-sm-first order-last offset-sm-1 mt-5">
            <img
              style={{ borderRadius: "50%", width: "110%", opacity: 0.9 }}
              class="mt-3"
              src={process.env.PUBLIC_URL + "/image/me3.jpg"}
              alt="Profile pic"
            />
          </div>
          <div className="col-12 col-sm-5 mt-5">
            <div className="row one ml-2">Hello,</div>
            <div className="row two ml-2">a bit about me:</div>
            <div className="row three">
              <Link to="/resume" className="three1 col-3">
                RESUME
              </Link>
              <Link to="/projects" className="three2 col-3">
                WORK
              </Link>
              <Link to="/resume" className="three3 col-3">
                SKILLS
              </Link>
            </div>
            <div className="row ml-2">
              <b className="four ">
                Full-stack developer with an experience of 2 years, recently
                graduated from Lambton College. I possess significant experience
                in ASP.NET , ASP.NET CORE, C#, SQL SERVER, ENTITY FRAMEWORK, WEB
                API and REACT. I have knowledge in database design, PL/SQL, OOP
                concepts, data structures, and control structures. I am looking
                to implement my skills to help clients solve their problems.
              </b>
            </div>
          </div>
          <div className="col-12 col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default Home;
