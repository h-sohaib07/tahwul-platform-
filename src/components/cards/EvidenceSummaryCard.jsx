import './EvidenceSummaryCard.css';

const iconSrcMap = {
  total: '/perspective/totalevidence.svg',
  review: '/perspective/underreview.svg',
  progress: '/perspective/progressevidence.svg',
  completed: '/perspective/completeevidence.svg'
};

function EvidenceSummaryCard({ type, count, label }) {
  const iconSrc = iconSrcMap[type] || iconSrcMap.total;

  return (
    <div className="evidence-summary-card">
      <div className="evidence-icon">
        <img src={iconSrc} alt="" className="evidence-icon-img" />
      </div>
      <div className="evidence-content">
        <span className="evidence-count">{count}</span>
        <span className="evidence-label">{label}</span>
      </div>
    </div>
  );
}

export default EvidenceSummaryCard;
