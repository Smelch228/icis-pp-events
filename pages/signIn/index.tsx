import Password from "../../components/inputs/PasswordInput";
import Login from "../../components/inputs/UserInput";
import FormHelperText from '@mui/material/FormHelperText';
import Button from "@mui/material/Button";
import LoginButton from "../../components/buttons/PrimaryActionButton"


const Auth = () => (
    <div>
        <Login />
        <div>
            <Password/>
            <Button>Забыли пароль?</Button>
        </div>  
        <div>
            <LoginButton />
            <Button variant="text" size="small" color="inherit">Нет аккаунта?</Button>
        </div>
    </div>
)

export default Auth;