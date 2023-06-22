import styled from "styled-components";
import {loginUser, authCheck} from "../utils/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Input from "../Components/Input";

function getUserInfoFrom(data){};
export default function Login({setUser, user}){
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const checkPersistentLogin = async () => {
      const user = await authCheck();
      console.log(user);
      user && setUser(user);
    };
    useEffect (() => {
      checkPersistentLogin();
    });
    async function submitHandler(e){
        e.preventDefault()
        const newUser = {
            username: username,
            password: password,
        };
        try {
            const loginAttempt = await loginUser(newUser);
            console.log(loginAttempt)
            const validatedUser = getUserInfoFrom(loginAttempt) || loginAttempt;
            validatedUser.sucess && setUser(validatedUser.username)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        (user && navigate("/UserProfile"))
    }, [user, navigate])
    return (
        <LoginWrapper>
            <LoginForm onSubmit={submitHandler}>
                <input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <LoginSubmitButton>Login</LoginSubmitButton>
            </LoginForm>
        </LoginWrapper>
    )
};

const LoginWrapper = styled.div``;
const LoginForm = styled.form`
    display:flex;
    flex-flow:column nowrap;
    max-width: 200px;
    justify-self: center;
    align-self: center;
`;
const LoginSubmitButton = styled.button``;