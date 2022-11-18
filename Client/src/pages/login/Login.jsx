import "./login.css";
import axios from "axios"
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";


export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const { user, dispatch, isFecthing } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/login", {
        username: useRef.current.value,
        password: useRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" })

    }
  }
  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."
          ref={passwordRef} />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton" type="submit">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
}
