import React, {useState} from 'react';

//default value
const AuthContext = React.createContext({
    token:'',
    isAuth:false,
    login: (token) =>{},
    logout: () =>{},
});

export const AuthContextProvider = (props) =>{
    const insitalToken = localStorage.getItem('token');
    const[token, setToken] = useState(insitalToken);

    const isLoggedIn = !!token;

    const loginHander = (token) =>{
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
    }

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