import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, phone, website, id } = friend;
  return (
    <div className="friend-card">
      <h3>name : {name}</h3>
      <p>email : {email} </p>
      <p>phone : {phone}</p>
      <p> website : {website}</p>
      <button className="btn">
        <Link to={`/friends/${id}`}>details</Link>
      </button>
    </div>
  );
};

export default Friend;
