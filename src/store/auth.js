import React, {useCallback, useState, useEffect} from 'react';

let logoutTimer;
//default value
const AuthContext = React.createContext({
    token:'',
    isAuth:false,
    email:'',
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
    const storedEmail = localStorage.getItem('email');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if (remainingTime <= 3600) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      localStorage.removeItem('email');
      return null;
    }

    return {
      token: storedToken,
      duration: remainingTime,
      email: storedEmail,
    };
  };

export const AuthContextProvider = (props) =>{
    const tokenData = retrieveStoredToken();
    let initialToken;
    let initialEmail;
    if(tokenData){
      initialToken = tokenData.token;
      initialEmail = tokenData.email;
    }
       const[token, setToken] = useState(initialToken);
       const[email, setEmail] = useState(initialEmail);
    const isLoggedIn = !!token;
    const logoutHandler = useCallback(() =>{
        setToken(null);
        setEmail(null);
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if(logoutTimer) clearTimeout(logoutTimer);
    },[]);

    const loginHander = (token, expirationTime, email) =>{
        setToken(token);
        setEmail(email);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
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
        logout: logoutHandler,
        email: email
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;