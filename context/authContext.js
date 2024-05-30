import React,{ createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        token: ""
    })

    useEffect(() => {
        const loadLocalStorage = async() => {
            const data = await AsyncStorage.getItem("@auth");
            const loginData = JSON.parse(data);
            setState({...state, user: loginData?.user, token: loginData?.token});
        }
        loadLocalStorage();
    }, [])

    let token = state && state.token;

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.baseURL = 'https://blogapi-psaw.onrender.com/api/v1';

    return (
        <AuthContext.Provider value={[state,setState]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};