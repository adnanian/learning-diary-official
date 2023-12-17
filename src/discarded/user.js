import React, { useState } from "react";

// Create context
const UserContext = React.createContext();

// Create user provider
function UserProvider( {children} ) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };