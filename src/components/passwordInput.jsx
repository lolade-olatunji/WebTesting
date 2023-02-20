import React, { useState } from "react";
import '../styles/passwordInput.css';
import { FaEye } from 'react-icons/fa';

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <i>
        <FaEye />
        onClick={handleTogglePasswordVisibility}
        </i>
    </div>
  );
}

export default PasswordInput;