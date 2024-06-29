import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm";

const loginKeys = {
    Email: "email",
    Password: "password"
}


export const Login = () => {

    const [data, setData] = useState({});
    const {onLoginSubmit} = useContext(AuthContext);

    const {values, onChangeHandler, onSubmit} = useForm({
       [loginKeys.Email]: "",
       [loginKeys.Password]: ""
    }, onLoginSubmit)
    return(
        <section id="login-page" className="auth">
              <form id="login" method='POST' onSubmit={onSubmit}>
  
                  <div className="container">
                      <div className="brand-logo"></div>
                      <h1>Login</h1>
                      <label htmlFor="email">Email:</label>
                      <input    
                        type="email"   
                        id="email"    
                        name={loginKeys.Email}   
                        placeholder="Sokka@gmail.com" 
                        value={values[loginKeys.Email]} 
                        onChange={onChangeHandler}
                       
                        />
  
                      <label htmlFor="login-pass">Password:</label>
                      <input
                        type="password"
                        id="login-password"
                        name={loginKeys.Password}
                        value={values[loginKeys.Password]}
                        onChange={onChangeHandler}
                        //Todo onChange changeHadler
                        />
                      <input type="submit" className="btn submit" value="Login"  />
                  </div>
              </form>
          </section>
    )
}