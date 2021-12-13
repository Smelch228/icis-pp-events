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


export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="http://localhost:3000/events/detailed" underline="none" color="black">
        <CardActionArea>
          <CardContent>
            <Typography variant="button" display="block">
              ОФФЛАЙН
            </Typography>
            <Typography variant="h5">Турнир по хоккею на воде</Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="СПОРТ" variant="filled"></Chip>
              <Chip label="ХОББИ" variant="filled"></Chip>
              <Chip label="ПИВО" variant="filled"></Chip>
              <Chip label="ГРУСТЬ" variant="filled"></Chip>
            </Stack>
            <div
              className={css`
                margin-top: 15px;
              `}
            >
              <Typography variant="body1" color="text.secondary">
                Приглашаем вас на турнир 3x3. Взнос с команды 500 рублей.Победитель забирает всё...
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Stack direction="row" spacing={5}>
          <Typography variant="overline" display="block" gutterBottom>
            31 ОКТ 2021, 20:00 (120 мин)
          </Typography>
          <SubscribeCounterButton currentSubscribers={5} maxSubscribers={16} />
        </Stack>
      </CardActions>
    </Card>
  )
}