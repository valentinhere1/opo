import { FaTimes } from 'react-icons/fa';

const NavBar = ({ onClose }) => {
  return (
    <nav className="nav-bar">
      <div className="top-bar">
        <div className="logo">Novel Editor</div>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
    </nav>
  );
};