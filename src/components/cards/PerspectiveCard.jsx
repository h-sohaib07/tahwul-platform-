import './PerspectiveCard.css';

function PerspectiveCard({ perspective }) {
  const getItemStatus = (items, index) => {
    const statuses = ['completed', 'in_progress', 'not_started', 'partially_uploaded', 'fully_uploaded', 'delayed'];
    return statuses[index % statuses.length];
  };

  return (
    <div className="perspective-card">
      <div className="perspective-header">
        <h4 className="perspective-name">{perspective.name}</h4>
        <span className="perspective-score">{perspective.score.toFixed(2)}%</span>
      </div>

      <div className="perspective-body">
        {perspective.subItems.map((subItem, idx) => (
          <div key={idx} className="sub-card">
            <span className="sub-card-name">{subItem.name}</span>
            <div className="sub-card-indicators">
              {subItem.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className={`indicator ${getItemStatus(subItem.items, itemIdx)}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerspectiveCard;
