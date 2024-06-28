import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";

import {login} from "./services/authService"

function App() {

  const [auth, setAuth] = useState({});

  const onLoginSubmit = async (data) => {
    try {
      const res = await login(data);
      setAuth(res)
    } catch (error) {
      console.log("Problem");
    }
  }

  const contextValues = {
    onLoginSubmit,
  };
  return (
    <div className="App">
      <main> 
        <AuthContext.Provider value={contextValues}>
          <Routes>
            <Route path="/" element={<Login />}/>
          </Routes>
        </AuthContext.Provider>
        
      </main>
    </div>
  );
}

export default App;
