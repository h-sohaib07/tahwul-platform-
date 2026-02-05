import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Layout.css';

function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed((c) => !c)} />
      <TopBar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;
