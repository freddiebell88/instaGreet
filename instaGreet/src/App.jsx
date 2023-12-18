import { useState, useEffect } from "react";
import "./App.css";
import MainFeed from "./components/MainFeed";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from "./components/Registration";
import CreateCard from "./components/CreateCard";
import UserPage from "./components/UserPage";
import useLocalStorageState from 'use-local-storage-state'


function App() {
  const [token, setToken] = useLocalStorageState(null);
  const [username, setUsername] = useLocalStorageState("");
  const [cardInfo, setCardInfo] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  

  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
    console.log(token);
  };

  // useEffect(() => {
  //   axios
  //     .get('https://social-cards.fly.dev/api/cards/', {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setCardInfo(res.data)
  //     })
  // }, [token])


  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<MainFeed token={token} loggedIn={loggedIn} />}
        />
        <Route path="/login" element={<Login setAuth={setAuth} setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-card" element={token ? <Navigate to="/login" /> : <CreateCard token={token} />} />
        <Route path="/user-page" element={token ? <Navigate  to="/login" /> : <UserPage token={token} /> } />
      </Routes>
      {/* <h1>Cards</h1>
      {token ? (
        <ul>
          {cardInfo.map((card) => {
            return <li key={card.id}>{card.front_text}, {card.background_color}</li>
          })}
        </ul>
      ) : (
      <Login 
        setAuth={setAuth}/>
        )} */}
    </>
  );
}

export default App;
