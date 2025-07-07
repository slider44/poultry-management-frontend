
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar } from '@mui/material';
import {  Notifications, ExitToApp } from '@mui/icons-material';
import userIcon from '../images/profile_logo.png'


const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    });
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#F5F5F5', mt: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POULTRY MANAGEMENT SYSTEM
        </Typography>
        <Typography variant="caption" color="textSecondary">
          REPUBLIC OF THE PHILIPPINES
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Typography
          variant="caption"
          color="#1E3A8A"
          sx={{
           mx: 2,
            backgroundColor: 'rgba(246, 221, 204, 0.5)',
            padding: '5px 20px', // Increased padding for more space
            borderRadius: '5px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '13px',
            minWidth: '300px', // Increased width
            height: '35px', // Increased height
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0)',
          }}
        >
          {formatDateTime(currentTime)}
        </Typography>
        <IconButton color="inherit">
          <Avatar src={userIcon} alt="User Profile" />
        </IconButton>
        <IconButton color="inherit">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
