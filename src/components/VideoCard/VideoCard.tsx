import React, { useState } from 'react';
import { Trash2, Calendar, ExternalLink, Play } from 'lucide-react';
import { Video } from '../../types';
import { extractVideoId, getEmbedUrl } from '../../utils/youtube';
import styles from './VideoCard.module.scss';

interface VideoCardProps {
  video: Video;
  onDelete: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onDelete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractVideoId(video.youtubeUrl);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.videoContainer}>
        {isPlaying && videoId ? (
          <iframe
            src={getEmbedUrl(videoId)}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        ) : (
          <div className={styles.thumbnail}>
            <img src={video.thumbnailUrl} alt={video.title} />
            <button onClick={handlePlayClick} className={styles.playButton}>
              <Play size={24} fill="currentColor" />
            </button>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{video.title}</h3>
          <button onClick={onDelete} className={styles.deleteButton}>
            <Trash2 size={16} />
          </button>
        </div>

        {video.description && (
          <p className={styles.description}>{video.description}</p>
        )}

        <div className={styles.footer}>
          <div className={styles.date}>
            <Calendar size={14} />
            {formatDate(video.addedAt)}
          </div>
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            <ExternalLink size={14} />
            View on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;