import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Margot Robbie",
      image:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg?1",
      message: "Whats up ?",
    },
    {
      name: "Margot Robbie",
      image:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg?1",
      message: "Hows it going ?",
    },
    {
      message: "Whats up ?",
    },
  ]);
  const handleSend = (event) => {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MARGOT ROBBIE ON 10/08/2020
      </p>
      {messages.map((message) => {
        return message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        );
      })}
      <div>
        <form className="chatScreen__input">
          <input
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="chatScreen__inputButton"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
