import React, { useState } from 'react';
import { Item } from '../../commons/uiStyles';
import { 
    Grid, 
    Box, 
    Divider,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';

import RuleIcon from '@mui/icons-material/Rule';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewAgendaSharpIcon from '@mui/icons-material/ViewAgendaSharp';

import { Link } from 'react-router-dom';



function MainPageMenu() {
    const [itemWidthMD, setItemWidthMD] = useState(4);
    const [itemWidthSM, setItemWidthSM] = useState(6);
    const [itemWidthXS, setItemWidthXS] = useState(50);

    const [alignment, setAlignment] = useState('three');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  return (
    <div className="container-main-page">

    </div>
  );
}

export default MainPageMenu;
