import React from "react";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://files.cults3d.com/uploaders/28284376/illustration-file/c264f925-ae7f-46ff-975a-f7261f807d58/ezgif.com-gif-maker.gif" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Creative-Tail-People-boy.svg/1024px-Creative-Tail-People-boy.svg.png"
                      message = "Tired"
                      name = 'Victim 1'/>
        <SidebarChat url = "https://png.pngtree.com/png-vector/20220611/ourlarge/pngtree-laughing-boy-avatar-kid-laugh-png-image_4962311.png"
                      message = "Too much deadline"
                      name = 'Victim 2'/>
        <SidebarChat url = "https://i.fbcd.co/products/resized/resized-750-500/s211206-kids-avatar-mainpreview-66af841ac01820154960b09c5d9f19c21f0c57dc1aa979e658553e52a2e17a09.jpg"
                      message = "God ! Help me !!!"
                      name = 'Victim 3'/>
      </div>
    </div>
  );
}

export default Sidebar;
