import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import Amazonlogo from "./Assets/Amazonlogo.png";
import Treelogo from "./Assets/Treelogo.png";
import Fblogo from "./Assets/Fblogo.png";
import Googlelogo from "./Assets/Googlelogo.png";
import Bgimage from "./Assets/Bgimage.png";


const SignUp = () => {
  const navigate = useNavigate();
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    if (enteredPassword !== inputConfirmPasswordRef.current.value) {
      alert("Password should be same");
      return;
    }
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvhWF4VGO7sYKukjUXZUzQXe9NzlUK9jY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Successfully Registered");
        return res.json();
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    }).then((data) =>{
      localStorage.setItem("idToken", data.idToken);
      console.log(data);
      navigate("/login")
    });
  };

  return (
    <>
      <img src={Bgimage} alt="trees" className={classes.bgimg} />
      <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.ama}>
          <img src={Amazonlogo} alt="Amazon logo" />
        </div>
        <div className={classes.header}>Sign Up</div>
        <img
          src={Treelogo}
          alt="Man & Women under Tree"
          className={classes.tree}
        />
        <div className={classes.email}>
        <label htmlFor="emailll">Email</label>
        <br/>
          <input
            type="email"
            name="emailll"
            required
            ref={inputEmailRef}
            autoComplete="on"
          />
        </div>
        <div className={classes.password}>
        <label htmlFor="passcode">Password</label>
        <br />
          <input
            type="password"
            name="passcode"
            required
            ref={inputPasswordRef}
            autoComplete="on"
          />
        </div>
        <div className={classes.password}>
        <label htmlFor="confirm_passcode">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirm_passcode"
            required
            ref={inputConfirmPasswordRef}
            autoComplete="on"
          />
        </div>
        <div className={classes.btn}>
          <button type="submit">Sign Up</button>
        </div>
        <div className={classes.linkk}>
          <span style={{color:'#D9185F'}}>
            Already Registered? <Link to="*" style={{color:'#D9185F', textDecoration: 'none' }}>Login</Link>
          </span>
        </div>
        <div className={classes.gogo}>
            <img src={Googlelogo} alt="google" style={{paddingLeft:'4px',paddingTop:'5px',width:'36px',height:'36px'}}/>
            <span>CONTINUE WITH GOOGLE</span> 
        </div>
        <div className={classes.fb}>
            <img src={Fblogo} alt="facebook" style={{paddingLeft:'4px',paddingTop:'5px',width:'36px',height:'36px'}}/>
            <span>CONTINUE WITH FACEBOOK</span> 
        </div>
      </form>
    </>
  );
};

export default SignUp;
