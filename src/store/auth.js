import React, {useCallback, useState, useEffect} from 'react';

let logoutTimer;
//default value
const AuthContext = React.createContext({
    token:'',
    isAuth:false,
    login: (token, duration) =>{},
    logout: () =>{},
});

//remaining time
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };

 //stored token and time
 const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if (remainingTime <= 3600) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      return null;
    }

    return {
      token: storedToken,
      duration: remainingTime,
    };
  };

export const AuthContextProvider = (props) =>{
    const tokenData = retrieveStoredToken();
    let initialToken;
    if(tokenData) initialToken = tokenData.token;
       const[token, setToken] = useState(initialToken);
    const isLoggedIn = !!token;
    const logoutHandler = useCallback(() =>{
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if(logoutTimer) clearTimeout(logoutTimer);
    },[]);

    const loginHander = (token, expirationTime) =>{
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    }

    useEffect(() => {
        if (tokenData) logoutTimer = setTimeout(logoutHandler, tokenData.duration);
          }, [tokenData, logoutHandler]);

    //setValue in context (updated value)
    const contextValue = {
        token: token,
        isAuth: isLoggedIn,
        login: loginHander,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;