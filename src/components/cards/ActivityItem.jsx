import './ActivityItem.css';

function ActivityItem({ activity }) {
  return (
    <div className="activity-item">
      <div className="activity-dot" />
      <div className="activity-content">
        <p className="activity-message">{activity.message}</p>
        <span className="activity-time">{activity.time}</span>
      </div>
    </div>
  );
}

export default ActivityItem;
