import React, {Fragment} from "react";
import UserItem from "./UserItem/userItem"
import "./userList.css";


const UserList = ()=>{
    return(
        
        <div className="userList">
            <h2>
                This is the UserList
            </h2>
            <UserItem/>   
            <UserItem/>   
        </div>
        
        
    )
}

export default UserList;