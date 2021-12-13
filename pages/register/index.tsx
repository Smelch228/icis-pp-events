import Password from 'components/inputs/PasswordInput'
import RepeatPassword from 'components/inputs/RepeatPasswordInput'
import Login from 'components/inputs/UserInput'
import Mail from 'components/inputs/MailInput'
import RegisterButton from 'components/buttons/PrimaryActionButton'
import styles from './register.module.css'
import BackButton from 'components/buttons/BackButton'
import { css } from '@emotion/css'
import Logo from 'components/logo'
import { Button, Typography } from '@mui/material'

const Register = () => (
  <div className={styles.registerCard}>
    <div
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: start;
        width: 100%;
      `}
    >
      <div
        className={css`
          display: flex;
          flex: 2;
        `}
      >
        <Button href="http://localhost:3000/signIn">
          <BackButton />
        </Button>
      </div>
      <div
        className={css`
          display: flex;
          flex: 3.3;
        `}
      >
        <Logo />
      </div>
    </div>
    <div
      className={css`
        margin-bottom: 45px;
      `}
    >
      <Typography variant="h4" gutterBottom component="div">
        Регистрация
      </Typography>
    </div>
    <Mail />
    <Login />
    <Password />
    <RepeatPassword />
    <div
      className={css`
        margin-top: 60px;
      `}
    >
      <RegisterButton textValue={'Зарегистрироваться'} />
    </div>
  </div>
)

export default Register
