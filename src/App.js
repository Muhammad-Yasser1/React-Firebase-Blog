//react things
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//styles
import "./styles/App.scss";
//store
import store from "./store/store";
// components
import AppNavbar from "./components/AppNavbar";
import Modal from "./components/Modal";
import Foot from "./components/Foot";
//views
import Blog from "./views/Blog";
import FullArticle from "./views/FullArticle";
import Create from "./views/Create";
import Edit from "./views/Edit";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route
            render={({ location }) => (
              <div style={styles.fill}>
                <main className="container-fluid px-md-5">
                  <AppNavbar />
                  <hr className="mt-0 mb-3" />
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={300}
                    >
                      <Switch location={location}>
                        <Route path="/:id/edit" component={Edit} />
                        <Route path="/create" component={Create} />
                        <Route path="/:id" component={FullArticle} />
                        <Route path="/" component={Blog} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                  <Modal />
                  <Foot />
                </main>
              </div>
            )}
          />
        </Router>
      </Provider>
    );
  }
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

export default App;
