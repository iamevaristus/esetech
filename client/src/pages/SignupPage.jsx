import { useState } from 'react';
import Title from '../commons/Title'
import AuthFormField from "../components/AuthFormField"
import PasswordFormField from '../components/PasswordFormField'
import { useNavigate } from 'react-router-dom';
import axiosConfig from "../services/api/axiosConfig"
import useAuth from "../services/hooks/useAuth"

function SignupPage() {
    Title("Create a new account")

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const { setToken, setEmailAddress, setFirstName, setLastName } = useAuth()

    const handleToggle = () => {
        setVisible(!visible)
    };

    return (
        <div className='p-8'>
            <div className='w-[600px]'>
                <p className="text-zinc-800 text-xl font-bold tracking-wide text-left">
                    Create an account
                </p>
                <AuthFormField
                    id="name"
                    title="Full name"
                    type="name"
                    onValueChanged={e => setName(e)}
                />
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
                        Signup
                    </button>
            </div>
        </div>
    )
}

export default SignupPage