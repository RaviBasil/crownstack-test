import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import LandingPage from "../pages/LandingPage";
import CategoryPage from "../pages/CategoryPage";
import CategoryDetail from "../pages/CategoryDetail";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/category" component={CategoryPage}></Route>
          <Route path="/category-detail" component={CategoryDetail}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
