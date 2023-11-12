import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>


interface InputProps extends HTMLInputProps {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}



export const Input = memo((props: InputProps) => {
    const {
        className,
        placeholder,
        value,
        onChange,
        type = "text",
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});