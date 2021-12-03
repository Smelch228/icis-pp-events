import Password from "../../components/inputs/PasswordInput";
import Login from "../../components/inputs/UserInput";
import FormHelperText from '@mui/material/FormHelperText';
import Button from "@mui/material/Button";

const Auth = () => (
    <div>
        <Login />
        <div>
            <Password/>
            <Button>Забыли пароль?</Button>
        </div>
    </div>
)

export default Auth;