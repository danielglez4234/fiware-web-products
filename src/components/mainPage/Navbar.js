import React from 'react';
import {
  IconButton,
  Divider
} from '@mui/material';

import { Link } from 'react-router-dom';

import { 
    LtTooltip
} from '../../commons/uiStyles';

import HomeRoundedIcon      from '@mui/icons-material/HomeRounded';
import RuleRoundedIcon      from '@mui/icons-material/RuleRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import gtc_logo from '../../commons/img/gtc_logo.png';


function Navbar({loggedIN}) {
    return (
        <nav className="sidebar close">
            <div className="box-gtc_logo">
                <img src={gtc_logo} alt="gtc_logo" className="gtc_logo" />
            </div>
            <div className="menu-bar">
            <Divider className="menu-divider" />
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link to="/home">
                                <LtTooltip title={<h3>{'HOME'}</h3>} placement="right">
                                    <IconButton aria-label="home" size="large" className="button-navbar-menu-icon">
                                        <HomeRoundedIcon fontSize="inherit" className="navbar-menu-icon"/>
                                    </IconButton>
                                </LtTooltip>
                            </Link>
                        </li>
            <Divider variant="middle" className="menu-divider-on-actions" />
                        <li className="nav-link">
                            <Link to="/entities">
                                <LtTooltip title={<h3>{"HANDLE ENTITIES"}</h3>} placement="right">
                                    <IconButton aria-label="entitie" size="large" className="button-navbar-menu-icon">
                                        <DataObjectRoundedIcon fontSize="inherit" className="navbar-menu-icon"/>
                                    </IconButton>
                                </LtTooltip>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/rules">
                                <LtTooltip title={<h3>{"HANDLE RULES"}</h3>} placement="right">
                                    <IconButton aria-label="rules" size="large" className="button-navbar-menu-icon">
                                        <RuleRoundedIcon fontSize="inherit" className="navbar-menu-icon"/>
                                    </IconButton>
                                </LtTooltip>
                            </Link>
                        </li>    
            <Divider variant="middle" className="menu-divider-on-actions" />
                        <li className="nav-link">
                            <Link to="/subscriptions">
                                <LtTooltip title={<h3>{"SUBSCRIPTIONS"}</h3>} placement="right">
                                    <IconButton aria-label="subscriptions" size="large" className="button-navbar-menu-icon">
                                        <SubscriptionsRoundedIcon fontSize="inherit" className="navbar-menu-icon"/>
                                    </IconButton>
                                </LtTooltip>
                            </Link>
                        </li>   
                    </ul>
            {/* <Divider variant="middle" className="menu-divider" /> */}
                </div>
                <div className="menu-bottom-content">
                    <ul className="menu-links">
                        { 
                        (loggedIN) ?
                            <li className="">
                                <Link to="#">
                                    <LtTooltip title={<h3>{"LOG OUT"}</h3>} placement="right">
                                        <IconButton aria-label="subscriptions" size="large" className="button-navbar-menu-icon">
                                            <LogoutRoundedIcon fontSize="inherit" className="navbar-menu-icon"/>
                                        </IconButton>
                                    </LtTooltip>
                                </Link>
                            </li>
                            :
                            <li className="">
                                <Link to="#">
                                    <LtTooltip title={<h3>{"LOG IN"}</h3>} placement="right">
                                        <IconButton aria-label="subscriptions" size="large" className="button-navbar-menu-icon">
                                            <LoginRoundedIcon fontSize="inherit" className="navbar-menu-icon"/>
                                        </IconButton>
                                    </LtTooltip>
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;