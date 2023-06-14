import React from "react";

class Blogdetail extends React.Component {
  renderBlog(blog) {
    if (blog != null)
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8  offset-sm-1 ">
              <div className="blogdetail ml-3">
                {blog.title}
                <hr className="bg-dark" />
              </div>

              <img src={process.env.PUBLIC_URL + blog.image} width="100%" />

              <div className="blogdetail-description">
                <p className="mt-5">{blog.description}</p>
                <h4>Quotes</h4>
                {this.renderQuotes(blog.quotes)}
              </div>
            </div>
          </div>
        </div>
      );
    else return <div />;
  }

  renderQuotes(quotes) {
    if (quotes == null) {
      return <div />;
    }
    const quot = quotes.map((quote) => {
      return (
        <div key={quote.id}>
          <p>{quote.quote}</p>
        </div>
      );
    });
    return <div>{quot}</div>;
  }
  render() {
    return <div>{this.renderBlog(this.props.title)}</div>;
  }
}

export default Blogdetail;
