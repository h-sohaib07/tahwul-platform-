import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TabNavigation from '../components/tabs/TabNavigation';
import EvidenceSummaryCard from '../components/cards/EvidenceSummaryCard';
import ProgressCircle from '../components/cards/ProgressCircle';
import LeaderCard from '../components/cards/LeaderCard';
import { perspectiveDetails } from '../data/mockData';
import './Details.css';

function DetailsOverview() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tabs = [
    { id: 'overview', label: 'Overview', path: `/perspectives/${id}` },
    { id: 'evidence', label: 'Evidence', path: `/perspectives/${id}/evidence` }
  ];

  const data = perspectiveDetails;

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

      <div className="content-card">
        <div className="content-row">
          <div className="content-label">Objective</div>
          <div className="content-value">{data.objective}</div>
        </div>

        <div className="content-row">
          <div className="content-label">Implementation Requirements</div>
          <div className="content-value">
            {data.implementationRequirements.map((req, idx) => (
              <p key={idx} className="requirement-item">{req}</p>
            ))}
          </div>
        </div>

        <div className="content-row">
          <div className="content-label">Evidence Documents</div>
          <div className="content-value">{data.evidenceDocuments}</div>
        </div>

        <div className="content-row">
          <div className="content-label">Related Regulations</div>
          <div className="content-value">{data.relatedRegulations}</div>
        </div>

        <div className="content-row">
          <div className="content-label">Scope</div>
          <div className="content-value">{data.scope}</div>
        </div>
      </div>

      <div className="leaders-section">
        <h3 className="section-title">Leaders</h3>
        <div className="leaders-grid">
          {data.leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsOverview;
