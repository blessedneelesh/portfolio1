import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
class Blog extends React.Component {
  render() {
    const blog = this.props.blogs.map((blog) => {
      return (
        <div>
          <Media key={blog.id} style={{ marginBottom: "20px" }}>
            <Media>
              <img
                src={process.env.PUBLIC_URL + blog.image}
                alt="Generic placeholder image"
                width="200"
                height="200"
              />
            </Media>
            <Link to={`/blog/${blog.id}`} className="blog-media ml-4">
              <Media body>
                <Media heading>{blog.title}</Media>
                {blog.description}
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Link>
          </Media>
          <hr className="bg-dark" />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row ">
          <div className="col-12 col-sm-8 offset-sm-1">
            <div className="blog ml-3">
              BLOG <hr className="bg-dark" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-1">
            <div className=" ml-3" style={{ color: "gray" }}>
              {blog}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
