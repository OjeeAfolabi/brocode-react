import profilePic from '../assets/jcole.png'


const Cards = () => {
  return (
    <div className="card">
        <img className='artist' src={profilePic} alt="cartoon-j.cole" />
        <h2 className='title'>React Practice</h2>
        <p className='text'>I am Learning Web Development</p>
    </div>
  );
}

export default Cards