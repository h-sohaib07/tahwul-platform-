import './StatCard.css';

function StatCard({ value, label, icon: Icon, iconSrc, trend }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
      {(iconSrc || Icon) && (
        <div className={`stat-icon ${trend || ''} ${iconSrc ? 'stat-icon--img' : ''}`}>
          {iconSrc ? (
            <img src={iconSrc} alt="" className="stat-icon-img" />
          ) : (
            <Icon size={20} />
          )}
        </div>
      )}
    </div>
  );
}

export default StatCard;
