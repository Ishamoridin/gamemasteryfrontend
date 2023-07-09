import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./Pages/Home.jsx";
import CharacterSheet from "./Pages/CharacterSheet";
import CharacterLoad from "./Pages/CharacterLoad";
import CharacterCreation from "./Pages/CharacterCreation";
import GMScreen from "./Pages/GMScreen"
import UserCreation from "./Pages/UserCreation"
import Login from "./Pages/Login"
import PlayerProfile from "./Pages/PlayerProfile"
import { readPlayer } from "./utils/index"
import UserProfile from "./Pages/UserProfile"

export default function App(){
  const [currentUser, setCurrentUser] = useState("");
  const [playerObject, setPlayerObject] = useState({});
  const [characterObject, setCharacterObject] = useState({});
  const [newLogin, setNewLogin] = useState("");
  async function fetchPlayerObject(username){
    try {
      const player = await readPlayer(username);
      setPlayerObject(player);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect (() => {
    setCurrentUser(newLogin);
  }, [newLogin]);
  useEffect (() => {
    currentUser && fetchPlayerObject(currentUser)
  }, [currentUser])
  return (
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" 
              element={
                <Home 
                setPlayer={setPlayerObject}
                player={playerObject}
                />
              }
            />
            <Route path="/CharacterCreation"
              element={
                <CharacterCreation 
                  player={playerObject}
                />
              }
            />
            <Route path="/CharacterLoad"
              element={
                <CharacterLoad 
                  player={playerObject}
                  character={characterObject}
                  setCharacter={setCharacterObject}
                />
              }
            />
            <Route path="/CharacterSheet"
              element={
                <CharacterSheet 
                  player={playerObject}
                />
              }
            />
            <Route path="/GMScreen"
              element={
                <GMScreen user={currentUser} />
              }
            />
            <Route path="/UserCreation"
              element={
                <UserCreation setUser={setCurrentUser} />
              }
            />
            <Route path="/Login"
              element={
                <Login setUser={setNewLogin} user={currentUser} />
              }
            />
            <Route path="/PlayerProfile"
              element={
                <PlayerProfile player={playerObject} />
              }
            />
            <Route path="/UserProfile"
              element={
                <UserProfile isUserGM={currentUser ? currentUser.isGM : false} />
              }
            />
          </Routes>
        </BrowserRouter>
      </Main>
  );
}

const Main = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`