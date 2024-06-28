import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { AuthContext } from "./contexts/AuthContext";

function App() {


  const contextValues = {

  };
  return (
    <div className="App">
      <main> 
        <AuthContext.Provider>
          <Routes>
            <Route path="/" element={<Login />}/>
          </Routes>
        </AuthContext.Provider>
        
      </main>
    </div>
  );
}

export default App;
