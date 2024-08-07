import './footer.scss'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-header">
        <h1 className="logo"><i className="fa-solid fa-seedling"></i>Growy</h1>
      </div>

      <div className="newsletter">
        <h4>Subscribe to our Newsletter</h4>

        <input type="email" placeholder='Email'/>
        <button>Send</button>
      </div>
    </div>
 );
}