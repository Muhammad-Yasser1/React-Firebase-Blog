import React, { Component } from "react";
export class Foot extends Component {
  render() {
    return (
      <footer className="text-center p-4 p-sm-5" style={{ fontSize: "30px" }}>
        <hr className="mb-4" />
        Made with&nbsp;
        <img
          src={require("../images/heart.png")}
          className="img-fluid"
          alt="heart"
        />
        &nbsp;by
        <span style={{ color: "#61dafb" }}> React</span> &amp;
        <span style={{ color: "#ffcc31" }}> Firebase</span>
      </footer>
    );
  }
}

export default Foot;
