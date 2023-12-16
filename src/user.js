import React from "react";

// Create context
const UserContext = React.createContext();

// Create user provider
function UserProvider( {children} ) {
    return <UserContext.Provider value={null}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider };