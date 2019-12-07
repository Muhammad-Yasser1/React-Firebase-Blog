//react things
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//styles
import "./styles/App.scss";
// components
import AppNavbar from "./components/AppNavbar";
import Modal from "./components/Modal";
import Foot from "./components/Foot";
//pages
import Blog from "./pages/Blog";
import FullArticle from "./pages/FullArticle";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <Router>
      <main className="container-fluid px-md-5">
        <AppNavbar />
        <hr className="mt-0 mb-3" />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/posts/:id/edit" component={Edit} exact />
                  <Route path="/posts/create" component={Create} exact />
                  <Route path="/posts/:id" component={FullArticle} exact />
                  <Route path="/" component={Blog} exact />
                  <Redirect from="*" to="/" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Modal />
        <Foot />
      </main>
    </Router>
  );
};

export default App;
