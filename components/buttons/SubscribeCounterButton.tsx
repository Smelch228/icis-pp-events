import { Snackbar, Chip, Button, Alert } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useCallback, useMemo, useState } from 'react';
import axios from 'axios';

type TSubcribeCounter = {
  isSubscribed?: boolean,
  currentSubscribers: number,
  maxSubscribers: number,
  event: number,
  user: number
  handleClick?: () => void
}

export default function SubscribeCounterButton(
  {
    event,
    user,
    isSubscribed=false, 
    currentSubscribers, 
    maxSubscribers, 
    handleClick
  } : TSubcribeCounter) {

    const showSnackBar = () => (
      <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              autoHideDuration={3000}
          >
            <Alert severity="error">ты не прав дядя</Alert>
      </Snackbar>
    )


const [subscribeState, subscribe] = useState(isSubscribed);

const [subscribedQty, setSubscribedQty] = useState(currentSubscribers);

const countSubscribers = useCallback(
  (newSubscribers) => {
    if((newSubscribers > 0) && (newSubscribers<=maxSubscribers)){
      return `${newSubscribers}/${maxSubscribers ?? 0}`
    }
    return `${subscribedQty}/${maxSubscribers}`
  },
  [subscribedQty, maxSubscribers]
  )

const handleSubscribe = useCallback(
  () => {
    handleClick?.() ?? subscribe((isSubscribed)=>{
      if(!isSubscribed && subscribedQty<=(maxSubscribers-1)){
        axios.post('/user', {
          user,
          event
        })
        .then(function (response) {
          setSubscribedQty(subscribedQty+1);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        return !isSubscribed
      }
      else if(isSubscribed){
        axios.patch('/user', {
          user,
          event
        })
        .then(function (response) {
          setSubscribedQty(subscribedQty-1);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      
        return !isSubscribed
      }
      else {
          showSnackBar();
          return isSubscribed;
      }
    })
  },
  [handleClick, subscribe, subscribedQty, setSubscribedQty, maxSubscribers]
  )


//localhost:8000/api/events/getEventsByUserId/1
  return (
    <Button onClick={handleSubscribe}>
      <Chip 
        icon={<NotificationsIcon />} 
        label={countSubscribers(subscribedQty)} 
        color={subscribeState ? "success" : "default"}
        />
    </Button>
  )
}