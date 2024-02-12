// * Chakra Imports

// * Image imports
import GHLogo from '../assets/github.png'
import LILogo from '../assets/linkedin.png'
import GMLogo from '../assets/gmail.png'


function Footer() {

  return (
    <>
      <footer>
        <nav className='footerMenu'>
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/philiphart1006/"><img className='Logo' src={LILogo}/></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/philiphart1006"><img className='Logo' src={GHLogo}/></a>
          <a target='_blank' rel="noreferrer" href="mailto:philiphart1006@gmail.com"><img className='gmLogo' src={GMLogo}/></a>
        </nav>
      </footer>
    </>
  )}

export default Footer