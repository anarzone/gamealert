import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default () => (
  <header className="header">
    <div className="tc">
      <div>
        <Link to="/" className="header__title">Game Alert</Link>
      </div>
      <div>
        <NavLink className="header__menu--item" to="/topics">
          <span>Topics</span>
        </NavLink>
        <NavLink className="header__menu--item" to="/add">
          <span>Add Questions</span>
        </NavLink>
      </div>
    </div>
  </header>
);
