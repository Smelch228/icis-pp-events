import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function IconChips(){

  return (
    <Chip icon={<NotificationsIcon />} label="5/14" />
  );
}