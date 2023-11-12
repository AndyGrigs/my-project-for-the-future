import React from "react";
import cls from "./LoginForm.module.scss"
import { classNames } from "@/shared/lib/classNames"
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/ui/Input";

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder="Login"
                className={cls.input} />
            <Input
                placeholder="Password"
                className={cls.input} />
            <Button className={cls.loginBtn} >Enter</Button>
        </div>
    )
};