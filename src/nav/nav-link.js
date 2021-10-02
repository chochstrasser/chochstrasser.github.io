const NavLink = ({ onClick, isActive, text }) => (
  <button
    className={`código-button código-block ${isActive ? 'código-teal código-hover-teal' : 'código-white código-hover-white'}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default NavLink;
