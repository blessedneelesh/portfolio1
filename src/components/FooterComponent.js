import React from "react";
import { Redirect } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="row"
          style={{ backgroundColor: "#e83556", padding: "6%" }}
        >
          <div className="col-12 col-sm-2"> </div>

          <div className="col-12 col-sm-8">
            <div className="row">
              <div className="col-12 col-sm-3 mt-3">
                <div className="row">
                  <div className="col-sm-2 ">
                    <i class="fa fa-phone-square fa-2x ff "></i>
                  </div>
                  <div className="col-sm-10 fh ">
                    <strong>Call</strong> <br /> T:+1 4372186495
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <i class="fa fa-envelope-square fa-2x ff "></i>
                  </div>
                  <div className="col-sm-10 fh">
                    <strong>Contact:</strong> <br />
                    neeleshmrz@gmail.com
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <i class="fa fa-plus fa-2x ff "></i>
                  </div>
                  <div className="col-sm-10 fh">
                    <strong>Follow Me:</strong> <br />
                    <a
                      className="btn btn-social-icon btn-facebook mr-2"
                      href="http://www.facebook.com/profile.php?id="
                    >
                      <i className="fa fa-facebook fa-2x"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-linkedin"
                      href="http://www.linkedin.com/in/"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 mt-3">
                <div className="row">
                  <div className="col-sm-2">
                    <i class="fa fa-connectdevelop fa-2x ff "></i>
                  </div>
                  <div className="col-sm-10 fh">
                    <strong>Developed By:</strong> <br /> Neelesh Maharjan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
