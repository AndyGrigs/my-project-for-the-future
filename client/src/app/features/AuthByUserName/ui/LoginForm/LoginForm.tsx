import React from "react";
import cls from "./LoginForm.module.scss"
import { classNames } from "@/shared/lib/classNames"
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/ui/Input";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h2 className={cls.title}>Login</h2>
            <Input placeholder="Login" className={cls.input} />
            <Input placeholder="Password" className={cls.input} />
            <Button className={cls.loginBtn}>Enter</Button>
            <p className={cls.registrationLink}>
                Don't have an account? <AppLink to="/registration">Register</AppLink>
            </p>
        </div>
    )
};