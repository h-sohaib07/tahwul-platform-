import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TabNavigation from '../components/tabs/TabNavigation';
import EvidenceSummaryCard from '../components/cards/EvidenceSummaryCard';
import ProgressCircle from '../components/cards/ProgressCircle';
import DataTable from '../components/tables/DataTable';
import CommentSection from '../components/cards/CommentSection';
import ActivityItem from '../components/cards/ActivityItem';
import { 
  perspectiveDetails, 
  evidenceDocuments, 
  comments, 
  evidenceActivities 
} from '../data/mockData';
import './Details.css';

function DetailsEvidence() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tabs = [
    { id: 'overview', label: 'Overview', path: `/perspectives/${id}` },
    { id: 'evidence', label: 'Evidence', path: `/perspectives/${id}/evidence` }
  ];

  const data = perspectiveDetails;

  const columns = [
    { key: 'documentNumber', label: 'Document Number', sortable: true },
    { key: 'documentName', label: 'Document Name', sortable: true },
    { key: 'documentLead', label: 'Document Lead', sortable: true },
    { key: 'documentPreparer', label: 'Document Preparer', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'dueDate', label: 'Due Date', sortable: true },
    { key: 'status', label: 'Status', sortable: true }
  ];

  return (
    <div className="details-page">
      <div className="details-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          <span>{data.title}</span>
        </button>
      </div>

      <div className="hero-card">
        <div className="hero-content">
          <span className="category-tag">{data.category}</span>
          <h1 className="hero-title">{data.title}</h1>
          <p className="hero-description">{data.description}</p>
        </div>
        <div className="hero-progress">
          <ProgressCircle value={data.progress} size={90} strokeWidth={8} />
        </div>
      </div>

      <div className="evidence-summary-grid">
        <EvidenceSummaryCard 
          type="total" 
          count={data.evidence.total} 
          label="Total Evidence" 
        />
        <EvidenceSummaryCard 
          type="review" 
          count={data.evidence.underReview} 
          label="Under Review Evidence" 
        />
        <EvidenceSummaryCard 
          type="progress" 
          count={data.evidence.inProgress} 
          label="In Progress Evidence" 
        />
        <EvidenceSummaryCard 
          type="completed" 
          count={data.evidence.completed} 
          label="Completed Evidence" 
        />
      </div>

      <TabNavigation tabs={tabs} />

      <div className="table-card">
        <DataTable columns={columns} data={evidenceDocuments} />
      </div>

      <div className="evidence-bottom">
        <div className="evidence-left">
          <CommentSection comments={comments} />
        </div>
        <div className="evidence-right">
          <div className="activities-card">
            <h3 className="activities-title">Recent Activities</h3>
            <div className="activities-list">
              {evidenceActivities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsEvidence;
