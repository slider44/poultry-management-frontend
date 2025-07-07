import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

interface NavBarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const buttonStyle = {
  color: '#1976d2',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  '&:hover': {
    backgroundColor: '#e0f2ff', 
    color: '#1976d2', 
    fontFamily: 'Montserrat, sans-serif',
     fontSize: '13px',
  },
};

const NavBar: React.FC<NavBarProps> = ({ setActiveComponent }) => {
  const [farmAnchorEl, setFarmAnchorEl] = React.useState<null | HTMLElement>(null);
  const [financialAnchorEl, setFinancialAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleFarmClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFarmAnchorEl(event.currentTarget);
  };

  const handleFarmClose = () => {
    setFarmAnchorEl(null);
  };

  const handleFinancialClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFinancialAnchorEl(event.currentTarget);
  };

  const handleFinancialClose = () => {
    setFinancialAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#F5F5F5', mt: 0 }}>
      <Toolbar>
        <Button
          color="inherit"
          startIcon={<DashboardIcon />}
          sx={{ ...buttonStyle }}
        >
          Dashboard & Reporting
        </Button>
        <Button
          color="inherit"
          startIcon={<InventoryIcon />}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleFarmClick}
          sx={{ ...buttonStyle, ml: 4 }}
        >
          Farm Operations
        </Button>
        <Menu
          anchorEl={farmAnchorEl}
          open={Boolean(farmAnchorEl)}
          onClose={handleFarmClose}
        >
          <MenuItem onClick={handleFarmClose} sx={{ ...buttonStyle }}>Inventory Management</MenuItem>
          <MenuItem onClick={handleFarmClose} sx={{ ...buttonStyle }}>Feed Management</MenuItem>
          <MenuItem onClick={handleFarmClose} sx={{ ...buttonStyle }}>Health Management</MenuItem>
        </Menu>
        <Button
          color="inherit"
          startIcon={<MoneyOffIcon />}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleFinancialClick}
          sx={{ ...buttonStyle, ml: 4 }}
        >
          Financial Management
        </Button>
        <Menu
          anchorEl={financialAnchorEl}
          open={Boolean(financialAnchorEl)}
          onClose={handleFinancialClose}
        >
          <MenuItem onClick={handleFarmClose} sx={{ ...buttonStyle }}>Sales Management</MenuItem>
          <MenuItem onClick={handleFarmClose} sx={{ ...buttonStyle }}>Expense Management</MenuItem>
        </Menu>
        <Button
          color="inherit"
          startIcon={<PeopleIcon />}
          sx={{ ...buttonStyle, ml: 4 }}
        >
          User Management
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;