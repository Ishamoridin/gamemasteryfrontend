import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import faker from "faker"
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import CharacterSheet from "./Pages/CharacterSheet";
import CharacterLoad from "./Pages/CharacterLoad";
import CharacterCreation from "./Pages/CharacterCreation";
import GMScreen from "./Pages/GMScreen"
import UserCreation from "./Pages/UserCreation"
import Login from "./Pages/Login"
import { authCheck, readPlayer } from "./utils/index"

export default function App(){
  const [currentUser, setCurrentUser] = useState("");
  const [playerObject, setPlayerObject] = useState({});
  const [characterObject, setCharacterObject] = useState({});
  const [newLogin, setNewLogin] = useState("");
  const checkPersistentLogin = async () => {
    const user = await authCheck();
    console.log(user);
    setNewLogin(user ? user : null);
  };
  async function fetchPlayerObject(username){
    try {
      const player = await readPlayer(username);
      setPlayerObject(player);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect (() => {
    checkPersistentLogin();
  },[]);
  useEffect (() => {
    setCurrentUser(newLogin);
  }, [newLogin]);
  useEffect (() => {
    fetchPlayerObject(currentUser)
  }, [currentUser])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/" 
          element={
            <Home 
            setPlayer={setPlayerObject}
            player={playerObject}
            />
          }
        />
        <Route 
          path="/CharacterCreation"
          element={
            <CharacterCreation 
              player={playerObject}
            />
          }
        />
        <Route 
          path="/CharacterLoad"
          element={
            <CharacterLoad 
              player={playerObject}
              character={characterObject}
              setCharacter={setCharacterObject}
            />
          }
        />
        <Route 
          path="/CharacterSheet"
          element={
            <CharacterSheet 
              player={playerObject}
            />
          }
        />
        <Route 
          path="/GMScreen"
          element={
            <GMScreen user={currentUser} />
          }
        />
        <Route
          path="UserCreation"
          element={
            <UserCreation setUser={setCurrentUser} />
          }
        />
        <Route 
          path="/Login"
          element={
            <Login setUser={setNewLogin} user={currentUser} />
          }
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

