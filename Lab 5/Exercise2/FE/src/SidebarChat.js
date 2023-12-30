import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat({url,message, name}) {
  return (
    <div className="sidebarChat">
      <Avatar src = {url} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default SidebarChat;
