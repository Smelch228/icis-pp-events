import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://memepedia.ru/wp-content/uploads/2017/05/%D0%BC%D0%B0%D0%BA%D1%81-%D0%B8%D0%B4%D0%B8-%D0%BD%D0%B0%D1%85%D1%83%D0%B9-%D0%BC%D0%B5%D0%BC.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Пашол нахуй
          </Typography>
          <Typography variant="body2" color="text.secondary">
          пашол нахуй пашол нахуй пашол нахуй пашол нахуй пашол нахуй пашол нахуй
          пашол нахуй пашол нахуй пашол нахуй пашол нахуй пашол нахуй пашол нахуй
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}