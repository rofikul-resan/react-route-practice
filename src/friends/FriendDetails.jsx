import React from "react";
import "./Friend.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, email, phone, website, id } = friend;
  const navigate = useNavigate();
  return (
    <div className="friend-card">
      <h3>name : {name}</h3>
      <p>email : {email} </p>
      <p>phone : {phone}</p>
      <p> website : {website}</p>
      <button onClick={() => navigate(-1)} className="btn">
        back
      </button>
    </div>
  );
};

export default FriendDetails;
