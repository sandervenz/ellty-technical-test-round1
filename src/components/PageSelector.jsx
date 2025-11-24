import { useState } from 'react';
import './PageSelector.css';

const PageSelector = () => {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  const [selectedPages, setSelectedPages] = useState([0]);

  const handleCheckboxChange = (index) => {
    if (index === -1) {
      if (selectedPages.length === pages.length) {
        setSelectedPages([]);
      } else {
        setSelectedPages(pages.map((_, i) => i));
      }
    } else {
      // Individual page clicked
      if (selectedPages.includes(index)) {
        setSelectedPages(selectedPages.filter(i => i !== index));
      } else {
        setSelectedPages([...selectedPages, index]);
      }
    }
  };

  const isAllSelected = selectedPages.length === pages.length;

  return (
    <div className="page-selector">
      <div className="pages-list">
        {/* All pages option */}
        <div className="page-item" onClick={() => handleCheckboxChange(-1)}>
          <span className="page-label">All pages</span>
          <div className={`checkbox ${isAllSelected ? 'checked' : ''}`}>
            {isAllSelected && (
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.5" stroke="white" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>

        {/* Individual pages */}
        {pages.map((page, index) => (
          <div key={index} className="page-item" onClick={() => handleCheckboxChange(index)}>
            <span className="page-label">{page}</span>
            <div className={`checkbox ${selectedPages.includes(index) ? 'checked' : ''}`}>
              {selectedPages.includes(index) && (
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.5" stroke="white" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="done-button">Done</button>
    </div>
  );
};

export default PageSelector;
