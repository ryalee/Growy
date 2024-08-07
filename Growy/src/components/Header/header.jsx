import './header.scss';

export default function Header() {
  return (
    <div className='header-container'>
      <h1 className="logo"><i className="fa-solid fa-seedling"></i>Growy</h1>

      <nav className="menu">
        <a href="#" className="menu-item">About</a>
        <a href="#" className="menu-item">Services</a>
        <a href="#" className="menu-item">Projects</a>
      </nav>

      <button className='contact-button'>Contact</button>
    </div>
  );
}