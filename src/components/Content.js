import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
const Content = ({ children }) => {
    const location = useLocation();
    const currentPath = location.pathname.substr(1,);
    useEffect(() => {
      if(currentPath  === 'chat' || currentPath.includes('replies-chat') || currentPath.includes('user-info')){
        document.getElementById("content").classList.add("chat-content");
      } else {
        document.getElementById("content").classList.remove("chat-content");
      }
    });
    return(
        <div id="content" className="content">{children}</div>
    )
};

export default Content;
