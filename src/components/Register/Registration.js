import React, { useEffect, useState } from "react";
// import users from '../../../user.json'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const data = axios.get("http://localhost:5000/credentials").then((res) => {
      setusers(res.data);
    });
  }, []);
  const register = async () => {
    const newUser = {
      username: username,
      password: password,
      role:role
    };
    try {
      await axios.post("http://localhost:5000/credentials", newUser);
      alert("Registration successful");
      console.log("success");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed");
    }
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <div>
      <h1 className="text-center">Registration</h1>
      <br />
      {/* <form onSubmit={register}> */}

      <input
        type="text"
        name="name"
        placeholder="Enter Your Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        name="name"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <div>
        <label>
          Role:{" "}
          <select value={role} onChange={handleRoleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
      </div>
      <br />
      <br />
      <button
        type="submit"
        className="btn btn-primary mt-3 mb-5 ml-2 mr-4"
        onClick={register}
      >
        Register
      </button>

      {/* </form> */}
    </div>
  );
};

export default Registration;
