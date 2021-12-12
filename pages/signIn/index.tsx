import Password from "../../components/inputs/PasswordInput";
import Login from "../../components/inputs/UserInput";
import Button from "@mui/material/Button";
import LoginButton from "../../components/buttons/PrimaryActionButton"
import { PASSWORD_FORGOT, HAS_NO_ACC, LOGIN } from "../../common/consts/texts";
import styles from "./signin.module.css"
import { css } from '@emotion/css'
import Logo from 'components/logo'


const Auth = () => (
  <div className={styles.authcard}>
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 45px;
      `}
    >
      <Logo textValue="Авторизация" />
    </div>
    <Login />
    <Password />
    <Button>{PASSWORD_FORGOT}</Button>
    <div
      className={css`
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <LoginButton textValue={LOGIN} />
      <Button variant="text" size="small" color="inherit" href="http://localhost:3000/register">
        {HAS_NO_ACC}
      </Button>
    </div>
  </div>
)

export default Auth;