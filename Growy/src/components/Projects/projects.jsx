import './projects.scss';
import image1 from '../../assets/images/project1.jpg'
import image2 from '../../assets/images/project2.jpg'
import image3 from '../../assets/images/project3.jpg'
import imageArrow from '../../assets/images/arrow-projects.png';

export default function Projects() {
  return (
    <div className='projects-container'>
      <div className="projects-header">
        <h1>See Our Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eius sunt tempora eum nemo in cupiditate.</p>

        <img src={imageArrow}/>
      </div>

      <div className="projects-grid">
        <article className='project-card project1'>
          <div className="card-header">
            <label className='label-social'>Social Media</label>
            <h3>Social Media Projects</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci incidunt architecto mollitia voluptatibus.</p>

            <button>See details</button>
          </div>

          <img src={image3}/>
        </article>

        <article className='project-card project2'>
          <div className="card-header">
            <label className='label-seo'>Seo Optimization</label>
            <h3>SEO Projects</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci incidunt architecto mollitia voluptatibus.</p>

            <button>See details</button>
          </div>

          <img src={image1}/>
        </article>

        <article className='project-card project3'>
          <div className="card-header">
            <label className='label-marketing'>Marketing</label>
            <h3>Marketing Booster</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci incidunt architecto mollitia voluptatibus.</p>
            
            <button>See details</button>
          </div>

          <img src={image2}/>
        </article>
      </div>
    </div>
 );
}