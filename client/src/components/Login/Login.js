import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export const Login = () => {

    const [data, setData] = useState({});
    const {onLoginSubmit} = useContext(AuthContext);
    return(
        <section id="login-page" className="auth">
              <form id="login" method='POST' onSubmit={onLoginSubmit}>
  
                  <div className="container">
                      <div className="brand-logo"></div>
                      <h1>Login</h1>
                      <label htmlFor="email">Email:</label>
                      <input    
                        type="email"   
                        id="email"    
                        name="name"    
                        placeholder="Sokka@gmail.com"  
                        //Todo onChange changeHadler
                        />
  
                      <label htmlFor="login-pass">Password:</label>
                      <input
                        type="password"
                        id="login-password"
                        name="password"
                        //Todo onChange changeHadler
                        />
                      <input type="submit" className="btn submit" value="Login" />
                  </div>
              </form>
          </section>
    )
}