// * Chakra Imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

// * Images
import Tetris from '../assets/classicalTetrisLogo.png'
import Tumble from '../assets/ttlogosq.png'
import Software from '../assets/software-seller-icon.png'
import HRTy from '../assets/hrt_favi.png'

import TetrisSS from '../assets/tetrisSS.png'
import TumbleSS from '../assets/tumbletellerss.png'
import SoftwareSS from '../assets/softwaress.png'


function Projects() {

  return (
    <>
      <section className='projects' name='projects'>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <img className='projectIcon' src={Tetris}/>
                <Box as="span" flex='1' textAlign='right'>
                  1 - "Classical Tetris" (HTML/CSS/JS web-based Tetris game)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='projectFull'>
              <div className='screenshots'>
                <img src={TetrisSS}/>
                <img />
              </div>
              <div className='projectDetails'>
                <p>A multi-themed PC/mobile responsive web-based game in vanilla base code without packages</p>
                <div className='coreSkills'>

                </div>
                <div className='projectLinks'>
                  <a target='_blank' rel='noreferrer' href='https://philiphart1006.github.io/classical-tetris/'>Visit</a>
                  <a target='_blank' rel='noreferrer' href='https://github.com/philiphart1006/classical-tetris/blob/main/README.md'>ReadMe</a>
                </div>
              </div>
              
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  2 - <b>Tumble Teller</b> (React application consuming public REST APIs)
                </Box>
                <img className='projectIcon' src={Tumble}/>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='projectFull'>
              <div className='screenshots'>
                <img src={TumbleSS}/>
                <img />
              </div>
              <div className='projectDetails'>
                <p>Utilised two external APIs to inform users how green their electricity grid was running, the weather forecast, and thus whether they should use their tumble dryer or line dry</p>
                <div className='coreSkills'>

                </div>
                <div className='projectLinks'>
                  <a target='_blank' rel='noreferrer' href='https://tumbleteller.netlify.app/'>Visit</a>
                  <a target='_blank' rel='noreferrer' href='https://github.com/philiphart1006/tumble-teller/blob/main/README.md'>ReadMe</a>
                </div>
              </div>
              
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <img className='projectIcon' src={Software}/>
                <Box as="span" flex='1' textAlign='right'>
                  3 - Software Seller (Full MERN stack auction site)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='projectFull'>
              <div className='screenshots'>
                <img src={SoftwareSS}/>
                <img />
              </div>
              <div className='projectDetails'>
                <p>A Windows XP themed software auction site that allowed users to sell/bid in real time</p>
                <div className='coreSkills'>

                </div>
                <div className='projectLinks'>
                  <a target='_blank' rel='noreferrer' href='https://software-seller-phil-eda9828bad1a.herokuapp.com/'>Visit</a>
                  <a target='_blank' rel='noreferrer' href='https://github.com/philiphart1006/Software-Seller-forked/blob/main/README.md'>ReadMe</a>
                </div>
              </div>
              
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  4 - HRTy (Full stack HR technology app with Python/Django back end)
                </Box>
                <img className='projectIcon' src={HRTy}/>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='projectFull'>
              <div className='screenshots'>
                <img src={TetrisSS}/>
                <img />
              </div>
              <div className='projectDetails'>
                <div className='projectLinks'>
                    <a target='_blank' rel='noreferrer' href='https://philiphart1006.github.io/classical-tetris/'>Visit</a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/philiphart1006/classical-tetris/blob/main/README.md'>ReadMe</a>
                </div>
                <p>An HR technology app for tracking teams, employees, subscriptions, and hardware using Django & PostgreSQL for the back-end and React for the front-end</p>
              </div>
                
                <div className='coreSkills'>

                </div>
                
              
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  )}

  export default Projects