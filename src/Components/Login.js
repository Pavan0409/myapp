import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Login.module.css";
import Amazonlogo from "./Assets/Amazonlogo.png";
import Treelogo from "./Assets/Treelogo.png";
import Fblogo from "./Assets/Fblogo.png";
import Googlelogo from "./Assets/Googlelogo.png";
import Bgimage from "./Assets/Bgimage.png";

const Login = () => {
  const [login, setLogin] = useState(false);
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const enteredloginEmail = loginEmailRef.current.value;
    const enteredloginPassword = loginPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvhWF4VGO7sYKukjUXZUzQXe9NzlUK9jY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredloginEmail,
          password: enteredloginPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("Login Success");
          console.log("Login Success", res);
          return res.json();
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        localStorage.setItem("idToken", data.idToken);
        setLogin(true);
        navigate("/header");
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <>
    <img src={Bgimage} alt="trees" className={classes.bgimg} />
      <form onSubmit={loginSubmitHandler} className={classes.form}>
        <div className={classes.ama}>
          <img src={Amazonlogo} alt="Amazon logo" />
        </div>
        <div className={classes.header}>Login</div>
        <img
          src={Treelogo}
          alt="Man & Women under Tree"
          className={classes.tree}
        />
        <div className={classes.email}>
          <label htmlFor="emailll">Email</label>
          <br />
          <input
            type="email"
            id="loginEmail"
            name="emailll"
            required
            autoComplete="on"
            ref={loginEmailRef}
          />
        </div>
        <div className={classes.password}>
          <label htmlFor="passcode">Password</label>
          <br />
          <input
            type="password"
            id="loginPassword"
            name="passcode"
            required
            autoComplete="on"
            ref={loginPasswordRef}
          />
        </div>
        <div className={classes.btn}>
          <button type="submit">Sign In</button>
        </div>
        <div className={classes.forgot}>
          <Link to="*" style={{ textDecoration: 'none', color:'#000000' }}>
            <span>Forgot Password</span>
          </Link>
          <span style={{color:'#D9185F'}}>
            New User! <Link to="/signup" style={{ textDecoration: 'none', color: '#D9185F' }}>SignUp</Link>
          </span>
        </div>
        <span style={{paddingLeft:'281px', paddingTop:'16px'}}>or</span>
        <div className={classes.gogo}>
            <img src={Googlelogo} alt="google" style={{paddingLeft:'4px',paddingTop:'5px',width:'36px',height:'36px'}}/>
            <span>CONTINUE WITH GOOGLE</span> 
        </div>
        <div className={classes.fb}>
            <img src={Fblogo} alt="Facebook" style={{paddingLeft:'4px',paddingTop:'5px',width:'36px',height:'36px'}}/>
            <span>CONTINUE WITH FACEBOOK</span> 
        </div>
      </form>
    </>
  );
};

export default Login;
