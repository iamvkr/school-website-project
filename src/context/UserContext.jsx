// currently this context is not used.

import { createContext, useState } from 'react';
export const UserContext = createContext("");
export const UserProvider = ({ children }) => {
    const [userDetails, setuserDetails] = useState(JSON.parse(sessionStorage.getItem("logedinDetails")) || {
        isloggedIn: false,
        userData: null
    })
    const [booksList, setbooksList] = useState([]);
    const [cart, setCart] = useState([]);
    
    return (<UserContext.Provider value={{ userDetails, setuserDetails,booksList, setbooksList,cart, setCart }}>
        {children}
    </UserContext.Provider>)
}