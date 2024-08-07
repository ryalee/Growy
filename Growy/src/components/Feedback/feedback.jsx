import './feedback.scss';
import imageClient1 from '../../assets/images/client1.png';

export default function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h1>What our clients say?</h1>
      </div>

      <div className="feedback-box">
        <div className='image-container'>
          <div className="image-background"></div>
          <img src={imageClient1}/>
        </div>

        <div className="feedback-text">
          <p>&quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusantium unde aliquid autem, nihil velit in veniam vitae esse ad dicta iusto facere pariatur. Tempore accusantium nemo nisi velit&quot;</p>

          <p className='client-name'>Client 1</p>

          <div className="feedback-navigation">
            <button className='btn1'>1</button>
            <button className='btn2'>2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
