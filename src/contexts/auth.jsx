import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../server/api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({user: "teste"}) //useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem("CNAuthUser");
        const storagedToken = localStorage.getItem("CNAuthToken");

        if (storagedUser && storagedToken) {
            //set header authorization if user is authenticated!
            api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`
            setUserInfo(JSON.parse(storagedUser));
        }
    }, [])

    const signIn = async (signInData) => {  
        try {
            const { data } = await api.post("/signin", signInData);
            setUserInfo(data.user);
            api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
            localStorage.setItem("CNAuthUser",JSON.stringify(data.user));
            localStorage.setItem("CNAuthToken", data.token);
            navigate("/dashboard")
    
        } catch (err) {
           console.log(err)
        }
    
    }

    const signOut = () => {
        navigate("/")
        setUserInfo(null);
        localStorage.removeItem("CNAuthUser");
        localStorage.removeItem("CNAuthToken");

    }

    return (
        <AuthContext.Provider
            value={{ signed: !!userInfo, userInfo, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}