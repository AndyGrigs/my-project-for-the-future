import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationInfo } from '../../types';
import styles from './Pagination.module.scss';

interface PaginationProps {
  paginationInfo: PaginationInfo;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  paginationInfo,
  onPageChange,
}) => {
  const { currentPage, totalPages, totalItems, itemsPerPage } = paginationInfo;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={styles.pagination}>
      <div className={styles.info}>
        Showing {startItem}-{endItem} of {totalItems} videos
      </div>
      
      <div className={styles.controls}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={styles.navButton}
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <div className={styles.pages}>
          {getVisiblePages().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '...'}
              className={`${styles.pageButton} ${
                page === currentPage ? styles.active : ''
              } ${page === '...' ? styles.dots : ''}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={styles.navButton}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;