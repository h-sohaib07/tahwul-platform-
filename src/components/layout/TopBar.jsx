import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import './TopBar.css';

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="menu-toggle">
          <Menu size={20} />
        </button>
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        <div className="user-menu">
          <div className="user-avatar">
            <img 
              src="https://ui-avatars.com/api/?name=Mohamed&background=1e3a5f&color=fff&size=32"
              alt="Mohamed"
            />
          </div>
          <span className="user-name">Mohamed</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
