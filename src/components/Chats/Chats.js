import React from "react";
import "./Chats.css";
import Chat from "../Chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Gal Gadot"
        message="Hey! how are you?"
        timestamp="40 seconds ago"
        profilePic="https://www.biography.com/.image/t_share/MTM3NTcyMjQyNDEzMzMxODg2/gal-gadot_shutterstock_138321062_1000x1000jpg.jpg"
      />
      <Chat
        name="Margot Robbie"
        message="Whats up?"
        timestamp="55 minutes ago"
        profilePic="https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg?1"
      />
      <Chat
        name="Scarlett Johansson"
        message="Ola!!"
        timestamp="3 days ago"
        profilePic="https://i.insider.com/51b20a3069beddd159000009?width=1100&format=jpeg&auto=webp"
      />
      <Chat
        name="Elizabeth Olsen"
        message="Hey man? Are you serious?"
        timestamp="1 weeks ago"
        profilePic="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NTE5MzAyNjY3/elizabeth-olsen-20631899-1-402.jpg"
      />
    </div>
  );
};

export default Chats;
