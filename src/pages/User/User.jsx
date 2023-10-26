import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
const User = () => {
  const userLogin = localStorage.getItem("userLogin");
  const pwdLogin = localStorage.getItem("pwdLogin");
  const userRegis = localStorage.getItem("userRegis");
  const pwdRegis = localStorage.getItem("pwdRegis");

  // Login
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleLogin = (event) => {
    // Save user data to local storage
    localStorage.setItem("userLogin", usernameLogin);
    localStorage.setItem("pwdLogin", passwordLogin);
    // Reset value
    event.preventDefault();
    setUsernameLogin("");
    setPasswordLogin("");
    alert("Success");
  };
  ////////////////////////////////////
  // Register
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = (event) => {
    // Save user data to local storage
    localStorage.setItem("userRegis", usernameRegister);
    localStorage.setItem("pwdRegis", passwordRegister);
    // Reset value
    event.preventDefault();
    setUsernameRegister("");
    setPasswordRegister("");
    alert("Success");
  };

  return (
    <section className={cx("box-info")}>
      <div className={cx("wrapper")}>
        <div className={cx("tab-info-detail")}>
          {/* Left */}
          <div className={cx("info-detail-left")}>
            <div className={cx("title-info")}>
              <h3>Login</h3>
            </div>
            <div className={cx("content-info")}>
              {/* Username */}
              <label>Username or Email</label>
              <input
                type="text"
                placeholder="Username"
                value={usernameLogin}
                onChange={(e) => setUsernameLogin(e.target.value)}
              />
              {/* Password */}
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
          {/* ---------------------------- */}
          {/* Right */}
          <div className={cx("info-detail-right")}>
            <div className={cx("title-info")}>
              <h3>Register</h3>
            </div>
            <div className={cx("content-info")}>
              {/* Username */}
              <label>Username or Email</label>
              <input
                type="text"
                placeholder="Username"
                value={usernameRegister}
                onChange={(e) => setUsernameRegister(e.target.value)}
              />
              {/* Password */}
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
              />
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
