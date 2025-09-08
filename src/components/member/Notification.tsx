import { useState, useEffect } from 'react';

type NotificationProps = {
  isVisible: boolean;
  type: 'success' | 'error' | 'info';
  message: string;
  duration: number;
  onClose: () => void;
}

const Notification = ({ isVisible, type, message, duration, onClose }: NotificationProps) => {
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

  const getNotificationConfig = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: '#f0fdf4',
          borderColor: '#bbf7d0',
          textColor: '#166534',
          iconColor: '#16a34a',
          icon: '✓',
          title: 'Berhasil!'
        };
      case 'error':
        return {
          bgColor: '#fef2f2',
          borderColor: '#fecaca',
          textColor: '#991b1b',
          iconColor: '#dc2626',
          icon: '✕',
          title: 'Error!'
        };
      case 'info':
        return {
          bgColor: '#eff6ff',
          borderColor: '#bfdbfe',
          textColor: '#1e40af',
          iconColor: '#2563eb',
          icon: 'ℹ',
          title: 'Info!'
        };
      default:
        return {
          bgColor: '#f0fdf4',
          borderColor: '#bbf7d0',
          textColor: '#166534',
          iconColor: '#16a34a',
          icon: '✓',
          title: 'Berhasil!'
        };
    }
  };

  const config = getNotificationConfig();

  return (
    <div style={{ position: 'fixed', top: 'clamp(1rem, 3vw, 1.25rem)', right: 'clamp(1rem, 3vw, 1.25rem)', zIndex: 1000, maxWidth: 'clamp(300px, 50vw, 500px)', width: '100%', animation: 'slideInUp 0.4s ease-out' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', padding: 'clamp(0.75rem, 2vw, 1rem)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', border: `1px solid ${config.borderColor}`, backgroundColor: config.bgColor, color: config.textColor }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(1.25rem, 3vw, 1.5rem)', height: 'clamp(1.25rem, 3vw, 1.5rem)', marginRight: 'clamp(0.5rem, 1.5vw, 0.75rem)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: config.iconColor, flexShrink: 0 }}>
          {config.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontWeight: 600, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: config.textColor, marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
            {config.title}
          </span>
          <p style={{ margin: 0, fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)', color: config.textColor, lineHeight: 1.4, opacity: 0.9 }}>
            {message}
          </p>
        </div>

        <button
          onClick={() => {
            setInternalVisible(false);
            onClose();
          }}
          style={{ background: 'none', border: 'none', color: config.iconColor, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', cursor: 'pointer', padding: '0', marginLeft: 'clamp(0.5rem, 1.5vw, 0.75rem)', opacity: 0.7, transition: 'opacity 0.2s ease', flexShrink: 0, width: 'clamp(1.25rem, 3vw, 1.5rem)', height: 'clamp(1.25rem, 3vw, 1.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
