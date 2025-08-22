import { useState, useEffect } from 'react';
import { Video } from '../types';

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addVideo = (video: Video) => {
    setVideos(prev => [video, ...prev]);
  };

  const deleteVideo = (id: string) => {
    setVideos(prev => prev.filter(video => video.id !== id));
  };

  const updateVideo = (id: string, updates: Partial<Video>) => {
    setVideos(prev =>
      prev.map(video =>
        video.id === id ? { ...video, ...updates } : video
      )
    );
  };

  return {
    videos,
    loading,
    error,
    addVideo,
    deleteVideo,
    updateVideo,
  };
};