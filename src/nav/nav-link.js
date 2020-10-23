const NavLink = ({ onClick, isActive, text }) => (
  <button
    className={`código-button código-block ${isActive ? 'código-khaki código-hover-khaki' : 'código-white código-hover-white'}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default NavLink;
