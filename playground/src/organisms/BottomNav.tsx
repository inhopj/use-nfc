import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import NfcIcon from '@mui/icons-material/Nfc';
import SensorsIcon from '@mui/icons-material/Sensors';
import CreateIcon from '@mui/icons-material/Create';
import { Link, useLocation } from 'react-router-dom';


const BottomNav = () => {
  const pathname = useLocation().pathname
  const [value, setValue] = useState(pathname)
  
  return (
    <BottomNavigation
      showLabels
      value={pathname}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<NfcIcon />}
        component={Link}
        to="/"
        value='/'
        />
      <BottomNavigationAction
        label="Scan"
        icon={<SensorsIcon />}
        component={Link}
        to="/scan"
        value='/scan'
        />
      <BottomNavigationAction
        label="Write"
        icon={<CreateIcon />}
        component={Link}
        to="/write"
        value='/write'
        />
    </BottomNavigation>
  );
};

export default BottomNav
