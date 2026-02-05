import './LeaderCard.css';

function LeaderCard({ leader, showScore = false }) {
  const avatarSrc = leader.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=1e3a5f&color=fff&size=48`;
  return (
    <div className="leader-card">
      <div className="leader-avatar">
        <img
          src={avatarSrc}
          alt={leader.name}
        />
      </div>
      <div className="leader-info">
        <span className="leader-name">{leader.name}</span>
        <span className="leader-role">{leader.role}</span>
      </div>
      {showScore && (
        <span className="leader-score">{leader.score}%</span>
      )}
    </div>
  );
}

export default LeaderCard;
