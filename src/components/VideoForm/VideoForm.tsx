import React, { useState } from 'react';
import { Plus, Youtube, X } from 'lucide-react';
import { extractVideoId } from '../../utils/youtube';
import styles from './VideoForm.module.scss';

interface VideoFormProps {
  onAddVideo: (url: string, title: string, description: string) => void;
}

const VideoForm: React.FC<VideoFormProps> = ({ onAddVideo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!extractVideoId(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    if (!title.trim()) {
      setError('Please enter a video title');
      return;
    }

    onAddVideo(url, title.trim(), description.trim());
    
    // Reset form
    setUrl('');
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setError('');
    setUrl('');
    setTitle('');
    setDescription('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={styles.addButton}
      >
        <Plus size={20} />
        Add Video
      </button>
    );
  }

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className={styles.formTitle}>
            <Youtube size={24} />
            <h3>Add New Video</h3>
          </div>
          <button onClick={handleClose} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.field}>
            <label htmlFor="url">YouTube URL</label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="title">Video Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter video title"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter video description (optional)"
              rows={3}
            />
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={handleClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              Add Video
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoForm;