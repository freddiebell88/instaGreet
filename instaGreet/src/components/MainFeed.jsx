import Card from "./Card";
import FollowingFeed from "./FollowingFeed";
import UserPage from "./UserPage";
import Login from "./Login";
import { useState, useEffect } from "react";
import axios from "axios";

const MainFeed = ({ token }) => {
  const [cardInfo, setCardInfo] = useState([]);
  // const [token, setToken] = useState(null)
  const [username, setUsername] = useState("");

  console.log(`this is main feed ${token}`);

  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCardInfo(res.data.results);
      });
  }, [token]);
  console.log("This is main feed");
  console.log(typeof cardInfo);

  return (
    <>
      <h1>Cards</h1>
      {token && (
        <div>
          {/* // <p>{cardInfo}</p> */}
          {cardInfo.map((card) => {
            return (
              <Card
                key={card.id}
                front_text={card.front_text}
                background_color={card.background_color}
              />
            );
          })}
        </div>
      )}
      {/* <p>This is MainFeed</p>
            <div className="cardFrame">
                <div className="card">
                    <Card />
                Card and Frame Placeholder</div>
            </div>
            <FollowingFeed

            />
            <UserPage

            /> */}
    </>
  );
};

export default MainFeed;