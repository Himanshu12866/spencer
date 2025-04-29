import React, { useContext } from "react";
import { AppContext } from "../context/dataContext";

const UsersData = () => {
  const { userData, loading } = useContext(AppContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {userData.map((user, index) => (
        <li key={index}>{user.firstName}</li>
      ))}
    </div>
  );
};

export default UsersData;
