import React, { useState, useEffect } from 'react';

interface NotificationProps {
  isVisible: boolean;
  type: 'success' | 'error' | 'info';
  message: string;
  duration: number;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ isVisible, type, message, duration, onClose }) => {
  const [internalVisible, setInternalVisible] = useState(isVisible);

  useEffect(() => {
    setInternalVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (internalVisible) {
      const timer = setTimeout(() => {
        setInternalVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [internalVisible, duration, onClose]);

  if (!internalVisible) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#4CAF50';
      case 'error':
        return '#f44336';
      case 'info':
        return '#2196F3';
      default:
        return '#4CAF50';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'success':
        return 'Berhasil!';
      case 'error':
        return 'Error!';
      case 'info':
        return 'Info!';
      default:
        return 'Berhasil!';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: getBackgroundColor(),
      color: 'white',
      padding: '15px 20px',
      borderRadius: '5px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000,
      maxWidth: '300px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong>{getTitle()}</strong>
          <p style={{margin: '5px 0 0 0', fontSize: '0.9rem'}}>
            {message}
          </p>
        </div>
        <button
          onClick={() => {
            setInternalVisible(false);
            onClose();
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0',
            marginLeft: '10px'
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
