
import { Modal } from "@/shared/ui/Modal/ui/Modal";
import cls from "./LoginModal.module.scss"
import { classNames } from "@/shared/lib/classNames"
import { LoginForm } from "../LoginForm/LoginForm";

export interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm />
        </Modal>
    )
};