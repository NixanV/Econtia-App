import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";
import {Home} from "./components/Home/Home";
import {Header} from "./components/Header/Header"

import {login} from "./services/authService"
import { NovTovarene } from "./components/NovTovarene/NovTovarene";
import { TursiTovarene } from "./components/TursiTovarene/TursiTovarene";

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
      <Header />
      <main> 
        <AuthContext.Provider value={contextValues}>

          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element = {<Home />} />
            <Route path="/nov-tovarene" element = {<NovTovarene />} /> 
            <Route path="/tursi-tovarene" element={<TursiTovarene />} />
          </Routes>
        </AuthContext.Provider>
        
      </main>
    </div>
  );
}

export default App;
