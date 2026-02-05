import './StatusBadge.css';

const statusConfig = {
  approved: { label: 'Approved', color: 'success' },
  pending_review: { label: 'Pending Review', color: 'warning' },
  in_progress: { label: 'In Progress', color: 'info' },
  rejected: { label: 'Rejected', color: 'danger' },
  draft: { label: 'Draft', color: 'neutral' }
};

function StatusBadge({ status }) {
  const config = statusConfig[status] || { label: status, color: 'neutral' };

  return (
    <span className={`status-badge ${config.color}`}>
      {config.label}
    </span>
  );
}

export default StatusBadge;
