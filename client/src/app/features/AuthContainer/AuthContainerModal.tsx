import { Modal } from "@/shared/ui/Modal/ui/Modal";

import { classNames } from "@/shared/lib/classNames"
import AuthContainer from "./AuthContainer";


export interface RegisterModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AuthContainerModal = ({ className, isOpen, onClose }: RegisterModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames("", {}, [className])}>
            <AuthContainer />
        </Modal>
    )
};