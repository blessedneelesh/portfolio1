import React from "react";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Resume from "./ResumeComponent";
import Skills from "./SkillsComponent";
import Blog from "./BlogComponent";
import { BLOGS } from "../shared/blogs";
import Blogdetail from "./BlogdetailComponent";
import Projects from "./ProjectsComponent";
import { PROJECTS } from "../shared/projects";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: BLOGS,
      projects: PROJECTS,
    };
  }

  // onBlogSelect(blogId){
  //     this.setState({
  //         selectedBlog: blogId
  //     })
  // }

  render() {
    const BlogWithId = ({ match }) => {
      return (
        <Blogdetail
          title={
            this.state.blogs.filter(
              (blog) => blog.id === parseInt(match.params.blogId, 10)
            )[0]
          }
        />
      );
    };

    const BlogPage = () => {
      return <Blog blogs={this.state.blogs} />;
    };

    const ProjectPage = () => {
      return <Projects projects={this.state.projects} />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/skills" component={Skills} />
          {/* <Route exact path="/blog" component={BlogPage} /> */}
          {/* <Route exact path="/blog/:blogId" component={BlogWithId} /> */}
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
