// Library
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Pages
import BlogPost from "../Pages/BlogPost/BlogPost";
import Product from "../Pages/Product/Product";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import AppYoutube from "../Pages/AppYoutube/AppYoutube";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import TodoApp from "../Pages/TodoApp/TodoApp";
import MaterialUI from "../MaterialUI";

// Styling all Component
import "../../css/main.css";

// Context
import { GlobalProvider } from "../../Context/Context";
import { Hooks } from "../Pages/Hooks/Hooks";

class Home extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h1>Router</h1>
          <ul>
            <li>
              <Link to="/">Youtube</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/Blogpost">Blogpost</Link>
            </li>
            <li>
              <Link to="/Lifecycle">LifeCycle</Link>
            </li>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/TodoApp">TodoApp</Link>
            </li>
            <li>
              <Link to="/MaterialUI">MaterialUI</Link>
            </li>
          </ul>
        </nav>

        <section className="main">
          <Switch>
            <Route path="/" exact>
              <AppYoutube />
            </Route>

            <Route path="/Product">
              <Product />
            </Route>

            <Route path="/Blogpost/Detail/:id">
              <DetailPost />
            </Route>

            <Route path="/Blogpost">
              <BlogPost />
            </Route>

            <Route path="/Lifecycle">
              <LifeCycleComp />
            </Route>

            <Route path="/Hooks">
              <Hooks />
            </Route>
            <Route path="/TodoApp">
              <TodoApp />
            </Route>

            <Route path="/MaterialUI">
              <MaterialUI />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
