import { useState } from "react";
import cls from "./RegisterForm.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/ui/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/providers/StoreProvider/config/store";
import { registerUser } from "@/app/entities/User/model/slice/userSlice";

export interface RegisterFormProps {
  onToggle: () => void;
}

export const RegisterForm = ({ onToggle }: RegisterFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(cls.RegisterForm, {}, [])}
    >
      <h2 className={cls.title}>Register</h2>

      <Input
        value={formData.name}
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
        className={cls.input}
      />

      <Input
        value={formData.email}
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className={cls.input}
      />

      <Input
        value={formData.password}
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className={cls.input}
      />

      <Button type="submit" className={cls.registerBtn}>
        Register
      </Button>

      <p className={cls.loginLink}>
        Already have an account?{" "}
        <span className={cls.link} onClick={onToggle}>
          Login
        </span>
      </p>
    </form>
  );
};
