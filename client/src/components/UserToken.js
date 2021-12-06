import { useState } from "react";

export default function UserToken(){
    const getToken = () => {

        const tokenString = localStorage.getItem('token');

        const tokenData = JSON.parse(tokenString);

        return tokenData;
    };

    const[token,setToken] = useState(getToken());
    
    const saveToken = (tokenData) => {
        localStorage.setItem('token',JSON.stringify(tokenData));

        setToken(tokenData.token);
    };

    return {
        setToken: saveToken,
        token
    }
}