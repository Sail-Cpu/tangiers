import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider(props) {

    function setToken(userToken) { 
        sessionStorage.setItem('token', JSON.stringify(userToken));
      }
      
      function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
      }

      const [user, setUser] = useState(getToken());

    return(
        <UserContext.Provider value={{setToken, user, getToken}}>
            {props.children}
        </UserContext.Provider>
    )
}