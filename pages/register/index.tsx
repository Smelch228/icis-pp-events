import Password from "../../components/inputs/PasswordInput"
import RepeatPassword from "../../components/inputs/RepeatPasswordInput"
import Login from "../../components/inputs/UserInput";
import Mail from "../../components/inputs/MailInput";

const Register = () => (
    <div>
        <Mail />
        <Login />
        <Password />
        <RepeatPassword />
    </div>
)

export default Register;