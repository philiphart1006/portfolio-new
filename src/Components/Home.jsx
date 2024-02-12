// * Chakra Imports

// * Image imports
import profileImage from '../assets/profileImage.jpg'


function Home() {

  return (
    <>
      <section className='hero'>
        <img className='profileImage' src={profileImage}/>
        <div className='headline'>
          <h1>Phil Hart - Software Developer</h1>
        </div>
      </section>
    </>
  )}

export default Home