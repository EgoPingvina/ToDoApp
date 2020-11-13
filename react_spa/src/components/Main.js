import React, { Component } from "react";
import
    {
        Route,
        NavLink,
        HashRouter
    } from "react-router-dom";
import Home from "./Home";
import ToDos from "./ToDos";
import Contact from "./Contact";
import ToDoItem from "./ToDoItem";
 
class Main extends Component
{
    render()
    {
        return <HashRouter>
            <div>
                <h1>SPA ToDo App</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Главная</NavLink></li>
                    <li><NavLink to="/todos">ToDos</NavLink></li>
                    <li><NavLink to="/contact">Контакты</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/todos" component={ToDos}/>
                    <Route exact path="/todos/:id(\d+)" component={ToDoItem}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>;
    }
}
 
export default Main;