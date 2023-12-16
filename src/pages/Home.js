//import { useState, useEffect} from "react";

import Profile from "../components/Profile";
import { UserProvider } from "../user";

function Home() {

    return (
        <main>
            <UserProvider>
                <Profile />
            </UserProvider>
        </main>
    );
}

export default Home;