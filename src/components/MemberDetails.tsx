import React from 'react';
import {  Typography, IconButton, Avatar, Button } from '@mui/material';


const MemberDetails = () => {
  return (
    <div>
   
      <div style={{ padding: '20px', backgroundColor: '#e9f0f7' }}>
        <Typography variant="h6">Member Information / Member Details</Typography>
        <div style={{ background: 'linear-gradient(to right, #4a90e2, #63b8ff, #f5a623)', height: '100px', marginTop: '20px', position: 'relative' }}>
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ width: 56, height: 56, position: 'absolute', left: '20px', top: '20px' }} />
          <Typography variant="h5" sx={{ color: 'white', position: 'absolute', left: '100px', top: '20px' }}>
            LAGUARDIA, ELIZABETH DUPA
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', position: 'absolute', left: '100px', top: '50px' }}>
            SS Number 33-959459-2 | Your password will expire on Dec 22, 2025 | Last login time not available
          </Typography>
         
        </div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Member Details
          </Button>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            SSS/UMID Pay Card Upgrade
          </Button>
          <Button variant="contained" color="primary">
            My Contributions
          </Button>
        </div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <div style={{ flex: 1, padding: '20px', backgroundColor: 'white', marginRight: '20px' }}>
            <Typography variant="h6">My Details</Typography>
            <Typography>SS Number Status</Typography>
            <Typography>ACTIVE</Typography>
            <Typography>Document Compliance</Typography>
            <Typography>DOCUMENTARY REQUIREMENT(S) SUBMITTED</Typography>
            <Typography>Membership Status</Typography>
            <Typography>PERMANENT</Typography>
            <Typography>Prior Registrant</Typography>
            <Typography>NO</Typography>
            <Typography>Date of SS Number Issuance</Typography>
            <Typography></Typography>
          </div>
          <div style={{ flex: 1, padding: '20px', backgroundColor: 'white' }}>
            <Typography variant="h6">Address</Typography>
            <Typography>Local Home Address</Typography>
            <Typography>P4 PKGS BAGONG SILANG BL10 L7 KALOOKAN CITY NCR</Typography>
            <Typography>Local Mailing Address</Typography>
            <Typography>LOT 7 BLK 9 PH 4 PKG 5 BARANGAY 176 CALOOCAN CITY METRO MANILA 1429</Typography>
            <Typography>Foreign Home Address</Typography>
            <Typography></Typography>
            <Typography>Foreign Mailing Address</Typography>
            <Typography></Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Update Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;