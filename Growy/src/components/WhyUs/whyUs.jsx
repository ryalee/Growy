import './whyUs.scss';
import image from '../../assets/images/whyUs-image.png';

export default function WhyUs() {
  return (
    <div className='whyUs-container'>
      <div className="whyUs-image">
        <img src={image}/>
      </div>

      <div className="whyUs-text">
        <h1>Why us?</h1>

        <div className="info-card">
          <div className="header-card">
            <h3>5+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="card-text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus neque necessitatibus.</p>
          </div>
        </div>

        <div className="info-card">
          <div className="header-card">
            <h3>106</h3>
            <p>Happy Clients</p>
          </div>

          <div className="card-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem. Rem enim sunt nihil quod.</p>
          </div>
        </div>

        <div className="info-card">
          <div className="header-card">
            <h3>30+</h3>
            <p>Business Partner</p>
          </div>

          <div className="card-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, rem. Rem enim sunt nihil quod.</p>
          </div>
        </div>
      </div>
    </div>
  );
}