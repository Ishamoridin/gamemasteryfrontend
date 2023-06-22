import styled/*, { keyframes }*/ from "styled-components";
import { useState, useEffect } from "react";
import { createNewUser } from "../utils/index"
export default function UserCreation({user, setUser}){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [userType, setUserType] = useState();
    const [newLogin, setNewLogin] = useState();
    useEffect(() => {
        setUser(newLogin)
    }, [newLogin, setUser])
    async function submitHandler(e){
        e.preventDefault()
        const createdUser = await createNewUser(username, password, userType);
        setNewLogin(createdUser)
    }
    return(
        <UserCreationWrapper>
            <UserCreationForm onSubmit={submitHandler}>
                <UserCreationUsername placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                <UserCreationPassword placeholder="Password" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <UserCreationUsertype onChange={(e) => {setUserType(e.target.value)}}/>
                <button>Submit</button>
            </UserCreationForm>
        </UserCreationWrapper>
    )
};
function UserCreationUsertype(){
    return(
        <UserCreationTypeSelector>
            <option value="player">Player</option>
            <option value="GM">GameMaster</option>
        </UserCreationTypeSelector>
    )
};
const UserCreationPassword = styled.input``;
const UserCreationUsername = styled.input``;
const UserCreationForm = styled.form``;
const UserCreationWrapper = styled.div``;
const UserCreationTypeSelector = styled.select``;
  
  
  
  
  
  
  
  
  