import { useState } from 'react';
import Title from '../commons/Title'
import AuthFormField from "../components/AuthFormField"
import PasswordFormField from '../components/PasswordFormField'
import { useNavigate } from 'react-router-dom';
import axiosConfig from "../services/api/axiosConfig"
import useAuth from "../services/hooks/useAuth"
import SweetAlert from '../commons/SweetAlert';
import SweetPopup from '../commons/SweetPopup';
import { wait } from "@testing-library/user-event/dist/utils";
import OurRoutes from '../commons/OurRoutes';

function LoginPage() {
    Title("Login to your account")

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const { setToken, setEmailAddress, setFirstName, setLastName } = useAuth()

    const handleToggle = () => {
        setVisible(!visible)
    };

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await axiosConfig.post("/auth/login", {
                emailAddress: email,
                password: password,
            });
            setIsLoading(false);
            if (response.data["statusCode"] === 200) {
                SweetAlert(response.data["message"], "success")
                setEmailAddress(response.data["data"]["emailAddress"])
                setFirstName(response.data["data"]["firstName"])
                setLastName(response.data["data"]["lastName"])
                setToken(response.data["data"]["token"])
                await wait(1000)
                navigate(OurRoutes.dashboard)
            } else {
                SweetAlert(response.data["message"], 'error')
            }
        } catch(error) {
            setIsLoading(false)
            if(error?.code === "ERR_NETWORK") {
                SweetAlert("Network error. Please check your internet connection", "error")
            }
        }
    };

    return (
        <div className='p-8'>
            <SweetPopup open={ isLoading } />
            <div className='w-[600px]'>
                <p className="text-zinc-800 text-xl font-bold tracking-wide text-left">
                    Welcome back, continue with your account
                </p>
                <form onSubmit={handleLogin}>
                    <AuthFormField
                        id="email"
                        title="Email Address"
                        type="email"
                        onValueChanged={e => setEmail(e)}
                    />
                    <PasswordFormField
                        id="password"
                        title="Password"
                        visible={visible}
                        onToggle={handleToggle}
                        onValueChanged={e => setPassword(e)}
                    />
                    <button
                        type='submit'
                        className='text-center text-x whitespace-nowrap bg-[#2A2A2A] w-full mt-7 p-3 rounded-md max-md:px-5'
                        style={{color: "#fff"}}
                    >
                            Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage