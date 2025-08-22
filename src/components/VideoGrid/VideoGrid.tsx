import React from 'react';
import { Video } from '../../types';
import VideoCard from '../VideoCard/VideoCard';
import styles from './VideoGrid.module.scss';

interface VideoGridProps {
  videos: Video[];
  onDeleteVideo: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onDeleteVideo }) => {
  if (videos.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>📺</div>
        <h3>No videos found</h3>
        <p>Add your first YouTube video to get started</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onDelete={() => onDeleteVideo(video)}
        />
      ))}
    </div>
  );
};

export default VideoGrid;