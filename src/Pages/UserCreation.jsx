import styled from "styled-components";
import { useState } from "react";
import { createNewUser } from "../utils/index"
export default function UserCreation(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [userType, setUserType] = useState();
    function submitHandler(){
        createNewUser(username, password, userType)
    }
    return(
        <UserCreationWrapper>
            <UserCreationForm onSubmit={submitHandler}>
                <UserCreationUsername onChange={(e) => {setUsername(e.target.value)}}/>
                <UserCreationPassword onChange={(e) => {setPassword(e.target.value)}}/>
                <UserCreationUsertype onChange={(e) => {setUserType(e.target.value)}}/>
            </UserCreationForm>
        </UserCreationWrapper>
    )
};
function UserCreationUsertype(){
    return(
        <UserCreationRaceSelector>
            <option value="player">Player</option>
            <option value="GM">GameMaster</option>
        </UserCreationRaceSelector>
    )
};
const UserCreationPassword = styled.input``;
const UserCreationUsername = styled.input``;
const UserCreationForm = styled.form``;
const UserCreationWrapper = styled.div``;
const UserCreationRaceSelector = styled.select``;
