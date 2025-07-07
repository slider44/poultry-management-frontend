import React, { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MemberDetails from './MemberDetails';
import { Box } from '@mui/material';

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('MemberDetails');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'MemberDetails':
        return <MemberDetails />;
 
      default:
        return <MemberDetails />;
    }
  };

  return (
   <div className="app" style={{ backgroundColor: '#e9f0f7', minHeight: '100vh', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>      <Header />
      <NavBar setActiveComponent={setActiveComponent} />
     <Box sx={{ mt: 2 }}>{renderComponent()}</Box>
    </div>
  );
};

export default Dashboard;