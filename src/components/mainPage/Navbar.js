import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
            <div className="image-text">
                <span className="image">
                    <img src={gtc_logo} alt="gtc_logo" />
                </span>
            </div>
            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="/home">
                                <LtTooltip 
                                    title={<h3>{'HOME'}</h3>} 
                                    placement="right" 
                                    arrow
                                >
                                    <IconButton aria-label="home" size="large">
                                        <HomeRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                </LtTooltip>
                            </a>
                        </li>
    
                        <li className="nav-link">
                            <a href="/entities">
                                <LtTooltip title={<h3>{"HANDLE ENTITIES"}</h3>} placement="right" arrow>
                                    <IconButton aria-label="entitie" size="large">
                                        <DataObjectRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                </LtTooltip>
                            </a>
                        </li>
    
                        <li className="nav-link">
                            <a href="/rules">
                                <LtTooltip title={<h3>{"HANDLE RULES"}</h3>} placement="right" arrow>
                                    <IconButton aria-label="rules" size="large">
                                        <RuleRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                </LtTooltip>
                            </a>
                        </li>    

                        <li className="nav-link">
                            <a href="/subscriptions">
                                <LtTooltip title={<h3>{"SUBSCRIPTIONS"}</h3>} placement="right" arrow>
                                    <IconButton aria-label="subscriptions" size="large">
                                        <SubscriptionsRoundedIcon fontSize="inherit" />
                                    </IconButton>
                                </LtTooltip>
                            </a>
                        </li>   
                    </ul>
                </div>
    
                <div className="bottom-content">
                    <ul className="menu-links">
                        { 
                        (loggedIN) ?
                            <li className="">
                                <a href="#">
                                    <LtTooltip title={<h3>{"LOG OUT"}</h3>} placement="right" arrow>
                                        <IconButton aria-label="subscriptions" size="large">
                                            <LogoutRoundedIcon fontSize="inherit" />
                                        </IconButton>
                                    </LtTooltip>
                                </a>
                            </li>
                            :
                            <li className="">
                                <a href="#">
                                    <LtTooltip title={<h3>{"LOG IN"}</h3>} placement="right" arrow>
                                        <IconButton aria-label="subscriptions" size="large">
                                            <LoginRoundedIcon fontSize="inherit" />
                                        </IconButton>
                                    </LtTooltip>
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;