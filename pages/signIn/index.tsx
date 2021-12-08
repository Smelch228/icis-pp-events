import Password from "../../components/inputs/PasswordInput";
import Login from "../../components/inputs/UserInput";
import Button from "@mui/material/Button";
import LoginButton from "../../components/buttons/PrimaryActionButton"
import { PASSWORD_FORGOT, HAS_NO_ACC } from "../../common/consts/texts";


const Auth = () => (
    <div>
        <Login />
        <div>
            <Password/>
            <Button>{PASSWORD_FORGOT}</Button>
        </div>  
        <div>
            <LoginButton />
            <Button variant="text" size="small" color="inherit" href="http://localhost:3000/register">{HAS_NO_ACC}</Button>
        </div>
    </div>
)

export default Auth;