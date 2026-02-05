import { NavLink, useLocation } from 'react-router-dom';
import './TabNavigation.css';

function TabNavigation({ tabs }) {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '') || '/';

  return (
    <nav className="tab-navigation">
      {tabs.map((tab) => {
        const tabPath = (tab.path || '').replace(/\/$/, '') || '/';
        const isExactMatch = pathname === tabPath;
        const isOverviewTab = tab.id === 'overview';
        const isActive = isOverviewTab
          ? isExactMatch && !pathname.startsWith(tabPath + '/')
          : isExactMatch;
        return (
          <NavLink
            key={tab.id}
            to={tab.path}
            end={isOverviewTab}
            className={`tab-item ${isActive ? 'active' : ''}`}
          >
            {tab.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default TabNavigation;
