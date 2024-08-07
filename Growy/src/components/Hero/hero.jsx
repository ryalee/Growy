import './hero.scss';
import image1 from '../../assets/images/mainImage1.jpg';
import image2 from '../../assets/images/mainImage2.jpg';
import image3 from '../../assets/images/mainImage3.jpg';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-text">
        <h1>Grow Your Business With us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aliquid quaerat vel aut! Quos incidunt veniam alias.</p>

        <button className='hero-button'>See How</button>
      </div>
  
    
      <div className="images-container">
        <div className="image1">
          <img src={image1}/>
        </div>

        <div className="image2">
          <img src={image2}/>
        </div>

        <div className="image3">
          <img src={image3}/>
        </div>
      </div>
    </div>
  );
}