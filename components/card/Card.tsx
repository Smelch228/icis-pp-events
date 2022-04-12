import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SubscribeCounterButton from '../../components/buttons/SubscribeCounterButton'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { css } from '@emotion/css'
import Link from '@mui/material/Link'
import format from 'date-fns/format';
import { ru } from 'date-fns/locale'
import { useMemo } from 'react';


export interface IEventProps {
  id: number;
  eventName: string;
  content: string;
  eventFormat: boolean;
  startTime: string;
  endTime: string;
  location: string;
  published: string;
  maxParticipants: number;
  currentParticipants: number;
  organizer: number;
  category: Array<Number>
}

interface ICardProps {
  event: IEventProps
}

const CATEGORIES = ["СПОРТ", "ХОББИ", "ПЕЧАЛЬ", "ГРУСТЬ"];

export default function MultiActionAreaCard({event}: ICardProps) {
  const {
    id,
    eventName,
    content,
    eventFormat,
    startTime,
    location,
    published,
    maxParticipants,
    currentParticipants,
    organizer,
    category
  } = event;




  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="http://localhost:3000/events/detailed" underline="none" color="black">
        <CardActionArea>
          <CardContent>
            <Typography variant="button" display="block">
            {eventFormat ? "ОФФЛАЙН" : "ОНЛАЙН"}
            </Typography>
            <Typography variant="h5">{eventName}</Typography>
            <Stack direction="row" spacing={1}>
              {category.map((x,i)=>( <Chip label={CATEGORIES[Number(x)]} variant="filled" key={i}></Chip>))}
            </Stack>
            <div
              className={css`
                margin-top: 15px;
              `}
            >
              <Typography variant="body1" color="text.secondary">
               {content}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Stack direction="row" spacing={8}>
          <Typography variant="overline" display="block" gutterBottom>
          {format(new Date(startTime),"dd MMM yyyy, hh:mm", { locale: ru })}
          </Typography>
          <SubscribeCounterButton currentSubscribers={currentParticipants} maxSubscribers={maxParticipants} user={1} event={id}/>
        </Stack>
      </CardActions>
    </Card>
  )
}