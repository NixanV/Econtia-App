import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <main> 
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
