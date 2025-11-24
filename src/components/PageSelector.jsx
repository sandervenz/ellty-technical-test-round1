import React, { useState } from 'react';
import './PageSelector.css';

const PageSelector = ({ variant = 'desktop' }) => {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  const [selectedPages, setSelectedPages] = useState([0]); // Page 1 selected by default

  const handleCheckboxChange = (index) => {
    if (index === -1) {
      // "All pages" clicked
      if (selectedPages.length === pages.length) {
        setSelectedPages([]); // Deselect all
      } else {
        setSelectedPages(pages.map((_, i) => i)); // Select all
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
  const isSomeSelected = selectedPages.length > 0 && selectedPages.length < pages.length;

  // Button variant (left side)
  if (variant === 'button') {
    return (
      <div className="page-selector-container button-variant">
        <div className="header">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H2C1.44772 2 1 2.44772 1 3V13C1 13.5523 1.44772 14 2 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44772 14.5523 2 14 2Z" stroke="#8B8B8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="header-title">Button</span>
        </div>
        <div className="button-list">
          <button className="done-button">Done</button>
          <button className="done-button">Done</button>
          <button className="done-button">Done</button>
        </div>
      </div>
    );
  }

  // Desktop variant (middle) or Home variant (right)
  return (
    <div className={`page-selector-container ${variant === 'home' ? 'home-variant' : 'desktop-variant'}`}>
      {variant === 'desktop' && (
        <div className="header">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1H3C1.89543 1 1 1.89543 1 3V10C1 11.1046 1.89543 12 3 12H13C14.1046 12 15 11.1046 15 10V3C15 1.89543 14.1046 1 13 1Z" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 15H10.5" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12V15" stroke="#6B6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="header-title">Desktop</span>
        </div>
      )}
      
      {variant === 'home' && (
        <div className="header">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6L8 1L14 6V13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V6Z" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 15V8H10V15" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="header-title">Home</span>
        </div>
      )}

      <div className="pages-list">
        {/* All pages option */}
        <div className="page-item" onClick={() => handleCheckboxChange(-1)}>
          <span className="page-label">All pages</span>
          <div className={`checkbox ${isAllSelected ? 'checked' : ''} ${isSomeSelected ? 'indeterminate' : ''}`}>
            {isAllSelected && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {isSomeSelected && !isAllSelected && (
              <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="done-button-bottom">Done</button>
    </div>
  );
};

export default PageSelector;
