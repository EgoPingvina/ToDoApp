import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>SPA ToDo App</h1>
          <ul className="header">
            <li><a href="/">Домой</a></li>
            <li><a href="/Stuff">Stuff</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;