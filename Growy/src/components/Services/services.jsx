import './services.scss';

export default function Services() {
  return (
    <div className='services-container'>
      <div className="service-text">
        <h2>Save time managing you business with our services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit fuga magnam, eos porro quam illum commodi</p>
      </div>

      <div className="services-grid">
        <article className='service-card service-card1'>
          <div className="card-image">
            <i className="fa-solid fa-hashtag"></i>
          </div>

          <div className="card-text">
            <h4>Social Media</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui fugit voluptatem laborum dolorum consequatur explicabo molestiae voluptate.</p>
          </div>
        </article>

        <article className='service-card service-card2'>
          <div className="card-image">
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="card-text">
            <h4>SEO Optimization</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui fugit voluptatem laborum dolorum consequatur explicabo molestiae voluptate.</p>
          </div>
        </article>

        <article className='service-card service-card3'>
          <div className="card-image">
            <i className="fa-solid fa-chart-simple"></i>
          </div>

          <div className="card-text">
            <h4>Marketing Plans</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui fugit voluptatem laborum dolorum consequatur explicabo molestiae voluptate.</p>
          </div>
        </article>
      </div>
    </div>
 );
}