/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Configuration from './modules/configuration';
import Helpsection from './modules/help_section';
import Mybusiness from './modules/my_business';
import Myorders from './modules/my_orders';
import Myproducts from './modules/my_products';
import Myprofile from './modules/my_profile';
import Mysales from './modules/my_sales';
import Welcomepage from './modules/welcome_page';

const Mainlogged = () => (
  <div className="homepage_container">
    <Router>
      <div className="page_holder">
        <div className="navigator_bar">
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/welcome_page">Pagina de Bienvenida</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/my_products">Mis productos</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/my_orders">Órdenes</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/my_business">Mi negocio</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/my_sales">Mis ventas</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/my_profile">Perfil</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/configuration">Configuración</NavLink>
          <NavLink activeClassName="selected_nav_item" className="nav_item" to="/help_section">Ayuda</NavLink>
        </div>
        <Switch className="main_content_container">
          <Route exact path="/">
            <Redirect to="/welcome_page" />
          </Route>
          <Route path="/welcome_page">
            <Welcomepage />
          </Route>
          <Route path="/my_products">
            <Myproducts />
          </Route>
          <Route path="/my_orders">
            <Myorders />
          </Route>
          <Route path="/my_business">
            <Mybusiness />
          </Route>
          <Route path="/my_sales">
            <Mysales />
          </Route>
          <Route path="/my_profile">
            <Myprofile />
          </Route>
          <Route path="/configuration">
            <Configuration />
          </Route>
          <Route path="/help_section">
            <Helpsection />
          </Route>
        </Switch>
      </div>
    </Router>
    ;
  </div>
);
export default Mainlogged;
