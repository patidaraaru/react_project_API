import React, { useState } from "react";

const Greeting = () => {
  const [role, setRole] = useState();

  return (
    <div>
      <select  onChange={(e) => setRole(e.target.value)}>
        <option value="default">Default</option>
        <option value="guest">Guest</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      {role === "guest" && "Please log in."}
      {role === "admin" && "Welcome back, Aarti!"}
      {role === "user" && "Hello Admin! You have full access"}
    </div>
  );
};

export default Greeting;
