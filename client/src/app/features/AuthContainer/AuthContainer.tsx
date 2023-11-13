import React, { useState } from "react";
import { RegisterForm } from "../RegisterByEmail/ui/RegisterForm/RegisterForm";
import { LoginForm } from "../AuthByUserName/ui/LoginForm/LoginForm";


const AuthContainer = () => {
  const [isRegisterVisible, setRegisterVisible] = useState(true);

  const handleToggle = () => {
    setRegisterVisible(!isRegisterVisible);
  };

  return (
    <div>
      {isRegisterVisible ? (
        <RegisterForm onToggle={handleToggle} />
      ) : (
        <LoginForm onToggle={handleToggle} />
      )}

    </div>
  );
};

export default AuthContainer;
