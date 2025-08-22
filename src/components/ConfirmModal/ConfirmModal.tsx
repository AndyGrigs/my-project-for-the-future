import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <AlertTriangle className={styles.icon} size={24} />
            <h3 className={styles.title}>{title}</h3>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.message}>{message}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;