import React, { useState, useEffect } from 'react';
import { Video, PaginationInfo } from './types';
import { extractVideoId, getThumbnailUrl } from './utils/youtube';
import VideoGrid from './components/VideoGrid/VideoGrid';
import VideoForm from './components/VideoForm/VideoForm';
import Pagination from './components/Pagination/Pagination';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import ConfirmModal from './components/ConfirmModal/ConfirmModal';
import styles from './App.module.scss';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState<{ show: boolean; video?: Video }>({ show: false });
  
  const itemsPerPage = 9;

  // Mock initial data
  useEffect(() => {
    const mockVideos: Video[] = [
      {
        id: '1',
        title: 'React Best Practices 2024',
        description: 'Learn the latest React best practices and patterns for modern web development.',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: getThumbnailUrl('dQw4w9WgXcQ'),
        addedAt: new Date('2024-01-15'),
      },
      {
        id: '2',
        title: 'TypeScript Advanced Features',
        description: 'Discover advanced TypeScript features that will improve your code quality.',
        youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
        thumbnailUrl: getThumbnailUrl('jNQXAC9IVRw'),
        addedAt: new Date('2024-01-10'),
      },
    ];
    setVideos(mockVideos);
    setFilteredVideos(mockVideos);
  }, []);

  // Filter videos based on search term
  useEffect(() => {
    const filtered = videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
    setCurrentPage(1);
  }, [searchTerm, videos]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVideos = filteredVideos.slice(startIndex, startIndex + itemsPerPage);

  const paginationInfo: PaginationInfo = {
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems: filteredVideos.length,
  };

  const handleAddVideo = (url: string, title: string, description: string) => {
    const videoId = extractVideoId(url);
    if (!videoId) return;

    const newVideo: Video = {
      id: Date.now().toString(),
      title,
      description,
      youtubeUrl: url,
      thumbnailUrl: getThumbnailUrl(videoId),
      addedAt: new Date(),
    };

    setVideos(prev => [newVideo, ...prev]);
  };

  const handleDeleteVideo = (video: Video) => {
    setDeleteModal({ show: true, video });
  };

  const confirmDelete = () => {
    if (deleteModal.video) {
      setVideos(prev => prev.filter(v => v.id !== deleteModal.video!.id));
    }
    setDeleteModal({ show: false });
  };

  return (
    <div className={styles.app}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.controls}>
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              totalResults={filteredVideos.length}
            />
            <VideoForm onAddVideo={handleAddVideo} />
          </div>

          <VideoGrid 
            videos={paginatedVideos}
            onDeleteVideo={handleDeleteVideo}
          />

          {totalPages > 1 && (
            <Pagination 
              paginationInfo={paginationInfo}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </main>

      <ConfirmModal
        isOpen={deleteModal.show}
        onClose={() => setDeleteModal({ show: false })}
        onConfirm={confirmDelete}
        title="Delete Video"
        message={`Are you sure you want to delete "${deleteModal.video?.title}"?`}
      />
    </div>
  );
}

export default App;