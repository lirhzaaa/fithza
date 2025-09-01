import Notification from './member/Notification';

interface NotificationData {
    isVisible: boolean;
    type: 'success' | 'error' | 'info';
    message: string;
}

interface NotificationTrailProps {
    notification: NotificationData;
    onClose: () => void;
}

const NotificationTrail = ({ notification, onClose }: NotificationTrailProps) => {
    return (
        <Notification
            isVisible={notification.isVisible}
            type={notification.type}
            message={notification.message}
            duration={3000}
            onClose={onClose}
        />
    );
};

export default NotificationTrail;