// LoginForm.jsx
import React from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/ui/Input";

export interface LoginFormProps {
    className?: string;
    onToggle: () => void;
}

export const LoginForm = ({ className, onToggle }: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h2 className={cls.title}>Login</h2>
            <Input placeholder="Email" className={cls.input} />
            <Input placeholder="Password" className={cls.input} />
            <Button className={cls.loginBtn} >
                Login
            </Button>
            <p className={cls.registerLink}>
                Don't have an account?{" "}
                <span className={cls.link} onClick={onToggle}>
                    Register
                </span>
            </p>
        </div>
    );
};
