// RegisterForm.jsx
import React, { useState } from "react";
import cls from "./RegisterForm.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/ui/Input";

export interface RegisterFormProps {
    onToggle: () => void;
}

export const RegisterForm = ({ onToggle }: RegisterFormProps) => {

    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className={classNames(cls.RegisterForm, {}, [])}>
            <h2 className={cls.title}>Register</h2>
            <Input
                value={email}
                type="email"
                onChange={(value) => setEmail(value)}
                placeholder="Email"
                className={cls.input} />

            <Input
                value={pass}
                type="password"
                onChange={(value) => setPass(value)}
                placeholder="Password"
                className={cls.input} />

            <Button className={cls.registerBtn} >
                Register
            </Button>
            <p className={cls.loginLink}>
                Already have an account?{" "}
                <span className={cls.link} onClick={onToggle}>
                    Login
                </span>
            </p>
        </div>
    );
};
