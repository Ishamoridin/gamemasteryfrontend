import styled from "styled-components";
import {loginUser} from "../utils/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function getUserInfoFrom(data){};
export default function Login({setUser, user}){
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    async function submitHandler(){
        const newUser = {
            username: username,
            password: password,
        };
        try {
            const loginAttempt = await loginUser(newUser);
            const validatedUser = getUserInfoFrom(loginAttempt);
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
                <LoginUsername placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <LoginPassword type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <LoginSubmitButton />
            </LoginForm>
        </LoginWrapper>
    )
};

const LoginWrapper = styled.div``;
const LoginForm = styled.form``;
const LoginUsername = styled.input``;
const LoginPassword = styled.input``;
const LoginSubmitButton = styled.button``;