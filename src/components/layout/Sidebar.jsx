import { NavLink, useLocation } from 'react-router-dom';
import {
  IconDashboard,
  IconPerspectives,
  IconTasks,
  IconDocuments,
  IconReports,
  IconUsersRoles
} from './SidebarIcons';
import './Sidebar.css';

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', Icon: IconDashboard, path: '/' },
  { id: 'perspectives', label: 'Perspectives', Icon: IconPerspectives, path: '/perspectives/1' },
  { id: 'tasks', label: 'Tasks', Icon: IconTasks, path: '/tasks' },
  { id: 'documents', label: 'Documents', Icon: IconDocuments, path: '/documents' },
  { id: 'reports', label: 'Reports', Icon: IconReports, path: '/reports' },
  { id: 'users', label: 'Users & Roles', Icon: IconUsersRoles, path: '/users' }
];

function Sidebar({ collapsed, onToggleCollapse }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path.split('/')[1] ? `/${path.split('/')[1]}` : path);
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img src="/sidebar/logo.svg" alt="Tahwul" className="logo-img" />
        </div>
        {!collapsed && (
          <button
            type="button"
            className="sidebar-collapse-btn sidebar-collapse-btn--open"
            onClick={onToggleCollapse}
            aria-label="Collapse sidebar"
          >
            <img src="/sidebar/collapse-btn.svg" alt="" className="collapse-btn-icon" />
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.Icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`nav-item ${active ? 'active' : ''}`}
            >
              <span className="nav-icon-wrap">
                <Icon className="nav-icon-svg" />
              </span>
              {!collapsed && <span className="nav-label">{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {collapsed && (
        <div className="sidebar-collapse-footer">
          <button
            type="button"
            className="sidebar-collapse-btn sidebar-collapse-btn--collapsed"
            onClick={onToggleCollapse}
            aria-label="Expand sidebar"
          >
            <img src="/sidebar/collapse-btn.svg" alt="" className="collapse-btn-icon collapse-btn-icon--expand" />
          </button>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
