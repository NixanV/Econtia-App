import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";
import {Home} from "./components/Home/Home"

import {login} from "./services/authService"

function App() {

  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
      const res = await login(data);
      console.log(res);
      setAuth(res);
      navigate("/home")
      
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
            <Route path="/home" element = {<Home />} />
          </Routes>
        </AuthContext.Provider>
        
      </main>
    </div>
  );
}

export default App;
