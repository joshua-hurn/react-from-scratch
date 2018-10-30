import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MainPage from "./Timeline";
import GoodbyeWorld from "./goodbye";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 class="display-4">chirper</h1>
          <img
            className="img-fluid max-width: 100px"
            src="https://images-na.ssl-images-amazon.com/images/I/41i6H31xZoL.jpg"
          />
        </div>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/goodbye" component={GoodbyeWorld} />
            </Switch>
          </Fragment>
        </Router>
        <footer class="navbar navbar-light bg-faded">
            copyright: chirper 3030
        </footer>
      </div>
    );
  }
}

export default Navigation;
