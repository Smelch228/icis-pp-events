import Chip from '@mui/material/Chip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';
import { useMemo } from 'react';

type TSubcribeCounter = {
  currentSubscribers: number,
  maxSubscribers: number,
  handleClick: () => void
}

export default function IconChips({currentSubscribers, maxSubscribers, handleClick}: TSubcribeCounter){
const countSubscribers = useMemo(
  () => `${currentSubscribers ?? 0}/${maxSubscribers ?? 0}`
  ,
  [currentSubscribers, maxSubscribers],
)
  return (
    <Button onClick={handleClick}>
      <Chip icon={<NotificationsIcon />} label={countSubscribers} />
    </Button>
  )
}