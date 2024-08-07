import './form.scss';

export default function Form() {
  return (
    <div className='form-container'>
      <div className="form-header">
        <h1>Ready to start your project?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum asperiores recusandae distinctio mollitia et maxime iste nostrum adipisci iure ab magnam.</p>
      </div>

      <div className="form">
        <form>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <textarea placeholder='What&#39;s your idea?' cols={30} rows={3}/>
        </form>
        
        <button>Submit</button>
      </div>
    </div>
  );
}