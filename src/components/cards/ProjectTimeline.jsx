import './ProjectTimeline.css';

function ProjectTimeline({ milestones, selectedYear, onYearChange }) {
  const years = [2024, 2025, 2026, 2027];

  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <h3 className="timeline-title">Project Timeline</h3>
        <select 
          className="year-selector"
          value={selectedYear}
          onChange={(e) => onYearChange?.(parseInt(e.target.value))}
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="timeline-track">
        <div className="timeline-line">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`timeline-segment ${milestone.status}`}
              style={{ 
                width: `${100 / milestones.length}%`,
                left: `${(index / milestones.length) * 100}%`
              }}
            />
          ))}
        </div>
        
        <div className="timeline-points">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`timeline-point ${milestone.status}`}
              style={{ left: `${((index + 0.5) / milestones.length) * 100}%` }}
            >
              <div className="point-marker" />
              <div className="point-info">
                <span className="point-date">{milestone.date}</span>
                <span className="point-label">{milestone.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
