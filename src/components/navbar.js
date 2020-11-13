import React from "react"
import Login from '../pages/login'
import {Link} from 'react-router-dom'
import { Route, Router } from 'react-router-dom'
import {
    NavItem,
    NavLink,
    Navbar,
} from "reactstrap"

import {
    User,
    Menu,
    Home,
    Search,
    Bell,
    Video,
    LogIn
} from "react-feather"

const NavigationBar = () => {
    return (
        <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-success mb-2">
            <div className="navbar-wrapper">
                <div className="navbar-container content">
                    <div className="navbar-collapse" id="navbar-mobile">
                        <div className="float-left bookmark-wrapper d-flex">
                            <ul className="navbar-nav d-xl-none">
                                <NavItem className="mobile-menu mr-auto">
                                    <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                        <Menu className="ficon" />
                                    </NavLink>
                                </NavItem>
                            </ul>
                            <ul className="nav navbar-nav bookmark-icons">
                                <NavItem className="nav-item d-none d-lg-block">
                                    <NavLink to="/app-todo" id="appTodo">
                                        <Home size={21} />
                                    </NavLink>
                                </NavItem>
                                <NavItem className="nav-item d-none d-lg-block">
                                    <NavLink>
                                        <Video size={21} />
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </div>
                        <ul className="nav navbar-nav">
                            <NavItem className="nav-search">
                                <NavLink className="nav-link-search">
                                    <Search size={21} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="dropdown-notification">
                                <NavLink>
                                    <Bell size={21} />
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <Link to="signup" >
                                <div className="pt-2 text-white">Register</div>
                                </Link>
                            
                            </NavItem>
                            <NavItem>
                                <Link to="login">
                                    <div className="ml-3 pt-2 text-white">Login</div>
                                </Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default NavigationBar