import React, {createContext, FC, useEffect, useState} from "react";

export type AuthType = {
    /**
     * Set isAuth for user loggedInOut page
     */

    isUserLoggedIn?: boolean;
};

export type AuthContextType = AuthType & {
    setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
    isUserLoggedIn: false,
    setIsUserLoggedIn: () => {
        // init
    }
});


export const AuthProvider: FC = ({children}) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem('auth')) {
            setIsUserLoggedIn(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isUserLoggedIn,
            setIsUserLoggedIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;