import React, { useState, useEffect } from 'react';
import ParlePopupAd from './parle-popup-ad';
import StickyWidget from './sticky-widget';

const POPUP_STORAGE_KEY = 'parle-popup-shown';

const ParlePopupManager: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const popupShown = localStorage.getItem(POPUP_STORAGE_KEY);
    
    if (!popupShown) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      setHasShownPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Mark popup as shown in localStorage
    localStorage.setItem(POPUP_STORAGE_KEY, 'true');
    setHasShownPopup(true);
  };

  const handleReopenPopup = () => {
    setShowPopup(true);
  };

  return (
    <>
      {/* Main popup - only show once */}
      <ParlePopupAd 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
      
      {/* Sticky widget - show after popup has been closed */}
      {hasShownPopup && (
        <StickyWidget onClick={handleReopenPopup} />
      )}
    </>
  );
};

export default ParlePopupManager;
