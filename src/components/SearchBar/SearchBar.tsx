import React from 'react';
import { Search, Filter } from 'lucide-react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalResults: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  totalResults,
}) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.filterButton}>
          <Filter size={18} />
        </button>
      </div>
      <div className={styles.resultsCount}>
        {totalResults} video{totalResults !== 1 ? 's' : ''} found
      </div>
    </div>
  );
};

export default SearchBar;