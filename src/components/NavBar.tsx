
import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';


const NavBar: React.FC = () => {

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
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: '#E6F0FA', mt: 0 }}>
      <Toolbar>
        <Button color="inherit" startIcon={<DashboardIcon />}>
          Dashboard & Reporting
        </Button>
         <Button
          color="inherit"
          startIcon={<InventoryIcon />}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleFarmClick}
          sx={{ ml: 2 }}
        >
           Farm Operations
        </Button>

        <Menu
          anchorEl={farmAnchorEl}
          open={Boolean(farmAnchorEl)}
          onClose={handleFarmClose}
        >
          <MenuItem onClick={handleFarmClose}>Inventory Management</MenuItem>
          <MenuItem onClick={handleFarmClose}>Feed Management</MenuItem>
          <MenuItem onClick={handleFarmClose}>Health Management</MenuItem>  
        </Menu>

         <Button
          color="inherit"
          startIcon={<MoneyOffIcon />}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleFinancialClick}

          sx={{ ml: 2 }}
        >
           Financial Management

        </Button>
         <Menu
          anchorEl={financialAnchorEl}
          open={Boolean(financialAnchorEl)}
          onClose={handleFinancialClose}
        >
          <MenuItem onClick={handleFarmClose}>Sales Management</MenuItem>
          <MenuItem onClick={handleFarmClose}>Expense Management</MenuItem>
         
        </Menu>
         <Button color="inherit" startIcon={<PeopleIcon />} sx={{ ml: 2 }}>
          User Management
        </Button>

     


      


        {/* <Button color="inherit" startIcon={<ShowChartIcon />} sx={{ ml: 2 }}>
          Growth Tracking
        </Button>
        <Button color="inherit" startIcon={<ShoppingCartIcon />} sx={{ ml: 2 }}>
          Sales Management
        </Button>
        <Button color="inherit" startIcon={<MoneyOffIcon />} sx={{ ml: 2 }}>
          Expense Management
        </Button>
        <Button color="inherit" startIcon={<AttachMoneyIcon />} sx={{ ml: 2 }}>
          Financial Management
        </Button>
        <Button color="inherit" startIcon={<PeopleIcon />} sx={{ ml: 2 }}>
          User Management
        </Button>
     
        <IconButton color="inherit" sx={{ ml: 'auto' }}>
          <ExitToAppIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
