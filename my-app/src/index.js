import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/about/aboutPage";
import * as serviceWorker from "./serviceWorker";

class RootComponent extends Component {
  render() {
    let Child;

    switch (this.props.route) {
      case "about":
        Child = About;
        break;
      default:
        Child = App;
    }
    return (
      <div>
        <Child />
      </div>
    );
  }
}

function render() {
  let route = window.location.hash.substr(1);
  ReactDOM.render(
    <RootComponent route={route} />,
    document.getElementById("root")
  );
}

window.addEventListener("hashchange", render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
