import BackButton from 'components/buttons/BackButton';
import SubscribeCounterButton from 'components/buttons/SubscribeCounterButton'
import Stack from '@mui/material/Stack';
import { css } from '@emotion/css';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import { useState } from 'react';



const theme = createTheme({
  typography: {
    h4: {
      fontSize: 28,
      fontWeight: 600 
    },
    button: {
      fontSize: 15,
      fontWeight: 10
    },
  },
})

const DetailedEvent = () => {
  const [subscribers, setSubscribers] = useState(5);
  const handleClick = () => {setSubscribers(subscribers + 1)}
  return(
  <div
    className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255);
      flex-direction: column;
      min-width: 411px;
      width: 411px;
      margin: 0 auto;
    `}
  >
    <div
      className={css`
        padding-right: 20px;
      `}
    >
      <Stack direction="row" spacing={28}>
        <Button href="http://localhost:3000/events">
          <BackButton />
        </Button>
        <SubscribeCounterButton currentSubscribers={5} maxSubscribers={16} handleClick = {handleClick}/>
      </Stack>
    </div>
    <div
      className={css`
        padding-top: 20px;
        justify-self: flex-start;
        align-self: flex-start;
        padding-left: 15px;
      `}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="button" display="block">
          ОФФЛАЙН
        </Typography>
        <Typography variant="h4">Турнир по хоккею на воде</Typography>
      </ThemeProvider>
      <div
        className={css`
          padding-top: 5px;
        `}
      >
        <Stack direction="row" spacing={1}>
          <Chip label="СПОРТ" variant="filled"></Chip>
          <Chip label="ХОББИ" variant="filled"></Chip>
          <Chip label="ПИВО" variant="filled"></Chip>
          <Chip label="ГРУСТЬ" variant="filled"></Chip>
        </Stack>
      </div>
      <div
        className={css`
          padding-top: 20px;
          padding-bottom: 20px;
        `}
      >
        <Typography variant="body1">
          Приглашаем вас на турнир 3x3. Взнос с команды 500 рублей. Победитель забирает всё. От вас
          требуется желание бороться за победу, а также соблюдение спортивного этикета. После
          мероприятия можно пойти праздновать победу в заведение, либо залить спиртом память о
          горьком поражении)) Мы будем рады всем!
        </Typography>
      </div>
      <div>
        <Typography variant="overline" gutterBottom>
          Когда
        </Typography>
        <Typography variant="body2" gutterBottom>
          31 ОКТ 2021, 18:00 (120 мин)
        </Typography>
        <Typography variant="overline" >
          Организатор
        </Typography>
        <Typography variant="body2" gutterBottom>
          Уэйн Гретцки
        </Typography>
        <Typography variant="overline" >
          Участники (5)
        </Typography>
        <Typography variant="body2"> Бобби Орр </Typography>
        <Typography variant="body2"> Сергей Федоров </Typography>
        <Typography variant="body2"> Евгений Малкин </Typography>
        <Typography variant="body2"> Павел Дацюк </Typography>
        <Typography variant="body2" gutterBottom> Александр Овечкин </Typography>
        <Typography variant="overline">
          Место
        </Typography>
        <Typography variant="body2">
          Москва, метро Тимирязевская, площадка на улице Пушкина, около дома Колотушкина.
        </Typography>
      </div>
    </div>
  </div>)
}

export default DetailedEvent;