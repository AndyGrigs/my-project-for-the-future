// RegisterForm.jsx
import React from "react";
import cls from "./RegisterForm.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/ui/Input";

export interface RegisterFormProps {
    className?: string;
    onToggle: () => void;
}

export const RegisterForm = ({ className, onToggle }: RegisterFormProps) => {
    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <h2 className={cls.title}>Register</h2>
            <Input placeholder="Email" className={cls.input} />
            <Input placeholder="Password" className={cls.input} />
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
