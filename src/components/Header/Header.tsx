import React from 'react';
import { Youtube, Settings, Activity } from 'lucide-react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Youtube className={styles.logo} size={32} />
          <div>
            <h1 className={styles.title}>YouTube Admin Panel</h1>
            <p className={styles.subtitle}>Manage your video collection</p>
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <Activity size={20} />
            <span>Analytics</span>
          </button>
          <button className={styles.actionButton}>
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;