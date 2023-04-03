import React from "react";
import "./friends.css";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h2>my friends</h2>
      <p>total friend {friends.length}</p>
      <div className="friends-contener">
        {friends.map((fd) => (
          <Friend key={fd.id} friend={fd}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
