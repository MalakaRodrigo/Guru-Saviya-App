import "./authentication.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginimage from "C:/Users/sheha/Documents/Guru-Saviya-App-1/guru_saviya_app/Frontend/src/images/authentication/log.svg";
import registerimage from "C:/Users/sheha/Documents/Guru-Saviya-App-1/guru_saviya_app/Frontend/src/images/authentication/register.svg";

const Authentication = () => {
  const navigate = useNavigate();
  const container = document.querySelector(".container");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  //register function
  const register = () => {
    const { name, email, password, password2 } = user;
    if (name && email && password && password2) {
      axios
        .post("http://localhost:3000/api/users/register", {
          name: user.name,
          email: user.email,
          password: user.password,
          password2: user.password2,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem('currentUser', res.data._id)
          navigate("/Home")
        })
        .catch((err) => console.log(err));
    } else {
      alert("invalid input");
    }
  };
  //login function
  const login = () => {
    const {name,email, password, password2} = user;
    console.log(email, password);
    if (email && password) {
      axios
        .post("http://localhost:3000/api/users/login", {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem('currentUser', res.data._id)
          navigate("/Home")
        })
        .catch((err) => console.log(err));
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" name="email"
                value={user.email}
                onChange={handleChange}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password"
                value={user.password}
                onChange={handleChange}/>
            </div>
            <input type="reset" value="Login" className="btn solid" onClick={login} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={user.password2}
                onChange={handleChange}
              />
            </div>
            <input
              type="button"
              className="btn"
              value="Sign up"
              onClick={register}
            />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => {
                container.classList.add("sign-up-mode");
              }}
            >
              Sign up
            </button>
          </div>
          <img src={loginimage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                container.classList.remove("sign-up-mode");
              }}
            >
              Sign in
            </button>
          </div>
          <img src={registerimage} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
