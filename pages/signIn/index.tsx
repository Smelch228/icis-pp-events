import Password from "../../components/inputs/PasswordInput";
import Login from "../../components/inputs/UserInput";
import Button from "@mui/material/Button";
import LoginButton from "../../components/buttons/PrimaryActionButton"
import { PASSWORD_FORGOT, HAS_NO_ACC, LOGIN } from "../../common/consts/texts";
import styles from "./signin.module.css"


const Auth = () => (
    <div className={styles.authcard}>
        <Login />
        <div>
            <Password/>
            <Button>{PASSWORD_FORGOT}</Button>
        </div>  
        <div>
            <LoginButton textValue={LOGIN}/>
            <Button variant="text" size="small" color="inherit" href="http://localhost:3000/register">{HAS_NO_ACC}</Button>
        </div>
    </div>
)

export default Auth;