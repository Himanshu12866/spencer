import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [userData, setUserData] = useState([]); // user data state
  const [loading, setLoading] = useState(true); // loading state
  const backendURL = process.env.REACT_APP_BACKEND_URL
  const getUserData = async () => {
    console.log(backendURL)
    try {
      const response = await axios.get(`${backendURL}getusers`);
      setUserData(response.data[0].users); // Assuming 'users' is the correct key
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when data is fetched or an error occurs
      //Just for testing purpose 
    }
  };
  useEffect(() => {
    getUserData();
    console.log(userData)
  }, []);
useEffect(() =>{
    console.log(userData) 
} , [])
  return (
    <AppContext.Provider value={{ userData, loading }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
