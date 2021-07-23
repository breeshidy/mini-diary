import './styles/Nav.css'
import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './Home'
import Update_Story from './Update_Story'
import Add_Diary_Entry from "./Add_Diary_Entry.js";

class Nav extends Component {
  render () {
    return (
      // provides the foundation for the navigation and browser history handling that routing is made up of.
      <HashRouter>
        <div className="Nav">
          <ul className="header">
            <li>
              <NavLink exact to="/">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Add Stories</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Update Stories</NavLink>
            </li>
          </ul>
          <div className="content"></div>
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Update_Story} />
          <Route path="/contact" component={Add_Diary_Entry} />
        </div>
      </HashRouter>
    );
  }
}

export default Nav
