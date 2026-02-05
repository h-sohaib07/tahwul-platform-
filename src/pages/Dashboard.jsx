import { useState } from 'react';
import StatCard from '../components/cards/StatCard';
import ProjectTimeline from '../components/cards/ProjectTimeline';
import PerspectiveCard from '../components/cards/PerspectiveCard';
import GaugeChart from '../components/charts/GaugeChart';
import BarChart from '../components/charts/BarChart';
import LeaderCard from '../components/cards/LeaderCard';
import ActivityItem from '../components/cards/ActivityItem';
import {
  dashboardStats,
  projectTimeline,
  perspectiveProgress,
  topPerformers,
  recentActivities,
  monthlyPerformance,
  auditReadiness
} from '../data/mockData';
import './Dashboard.css';

function Dashboard() {
  const [selectedYear, setSelectedYear] = useState(2026);

  const statusLegend = [
    { label: 'Not Started', color: 'var(--color-gray-400)' },
    { label: 'In Progress', color: 'var(--color-warning)' },
    { label: 'Completed', color: 'var(--color-success)' },
    { label: 'Partially Uploaded', color: 'var(--color-info)' },
    { label: 'Fully Uploaded', color: 'var(--color-success)' },
    { label: 'Delayed', color: 'var(--color-danger)' }
  ];

  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <ProjectTimeline 
          milestones={projectTimeline}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
      </section>

      <section className="dashboard-section stats-grid">
        <StatCard
          value={`${dashboardStats.overallProgress}%`}
          label="Overall Progress"
          iconSrc="/icons/chart-bar-line.png"
          trend="up"
        />
        <StatCard
          value={dashboardStats.totalCriteria}
          label="Total Criteria"
          iconSrc="/icons/folder-01.png"
        />
        <StatCard
          value={dashboardStats.completedCriteria}
          label="Completed Criteria"
          iconSrc="/icons/folder-check.png"
        />
        <StatCard
          value={dashboardStats.evidenceDocuments}
          label="Evidence Documents"
          iconSrc="/icons/file-security.png"
        />
        <StatCard
          value={dashboardStats.evidenceCompleted}
          label="Evidence (Completed)"
          iconSrc="/icons/file-verified.png"
        />
        <StatCard
          value={dashboardStats.uploadedToDGA}
          label="Uploaded To DGA"
          iconSrc="/icons/file-upload.png"
        />
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Progress Status</h2>
          <div className="status-legend">
            {statusLegend.map((status, idx) => (
              <div key={idx} className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: status.color }} />
                <span className="legend-label">{status.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="perspectives-grid">
          {perspectiveProgress.map((perspective) => (
            <PerspectiveCard 
              key={perspective.id} 
              perspective={perspective}
            />
          ))}
        </div>
      </section>

      <section className="dashboard-bottom">
        <div className="card compliance-card bottom-row1">
          <h3 className="card-title">Overall Compliance Score</h3>
          <div className="compliance-content">
            <GaugeChart value={65} label="Basic Standards 2025" color="warning" />
          </div>
        </div>

        <div className="card leaders-card bottom-row1">
          <h3 className="card-title">Top Performing Perspective Leaders</h3>
          <div className="leaders-list">
            {topPerformers.map((leader) => (
              <LeaderCard
                key={leader.id}
                leader={leader}
                showScore
              />
            ))}
          </div>
        </div>

        <div className="card activities-card bottom-row1">
          <h3 className="card-title">Recent Activities</h3>
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        <div className="card performance-card bottom-row2">
          <h3 className="card-title">12-Month Performance</h3>
          <BarChart data={monthlyPerformance} height={160} />
        </div>

        <div className="card audit-card bottom-row2">
          <h3 className="card-title">Audit Readiness</h3>
          <div className="audit-content">
            <GaugeChart
              value={auditReadiness.readinessLevel}
              label="Readiness Level"
              progressColor="#1EA54E"
            />
            <div className="audit-stats">
              <div className="audit-stat">
                <span className="audit-stat-value">{auditReadiness.overdueStds}</span>
                <span className="audit-stat-label">Overdue Stds</span>
              </div>
              <div className="audit-stat">
                <span className="audit-stat-value">{auditReadiness.missingEvidence}</span>
                <span className="audit-stat-label">Missing Evidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
