// * Chakra Imports
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from '@chakra-ui/react'

// * Image imports
import PHLogo from '../assets/PHLogo.png'
import HTML from '../assets/html.png'
import HTML3 from '../assets/skills/html.svg'
import HTML2 from '../assets/skills/html.png'
import ns from '../assets/skills/ns.svg'
import CSS from '../assets/css.png'
import CSS3 from '../assets/skills/css3.png'
import JS from '../assets/skills/js.png'
import gainsight from '../assets/skills/gsnxt.png'
import sass from '../assets/skills/sass.png'
import node from '../assets/skills/node.png'
import RC from '../assets/skills/ringcentral.png'
import TR from '../assets/skills/tr.png'
import vonage from '../assets/skills/vonage.svg'
import google from '../assets/skills/google2.png'
import zapier from '../assets/skills/zapier.png'
import px from '../assets/skills/px.jpeg'
import sfdc from '../assets/skills/sfdc.png'
import hs from '../assets/skills/hs.png'
import bs from '../assets/skills/bootstrap.png'
import chakra from '../assets/skills/chakra.svg'
import npm from '../assets/skills/npm.svg'
import django from '../assets/skills/django.svg'
import jwt from '../assets/skills/jwt-3.svg'
import mongodb from '../assets/skills/mongodb.svg'
import ex from '../assets/skills/ex.png'
import insomnia from '../assets/skills/apps-insomnia.svg'
import gh from '../assets/skills/github.png'
import git from '../assets/skills/git.png'
import trello from '../assets/skills/trello.png'
import jira from '../assets/skills/jira.svg'
import figma from '../assets/skills/figma.svg'
import pg from '../assets/skills/postgre.png'



function Skills() {

  return (
    <>
      <section className='skills' name='skills'>
          <div className='codingSkills'>
          <div className='skillsTitle'>
              <p>Coding Skills</p>
            </div>
          <SimpleGrid minChildWidth='100px' spacing='10px' className='backgroundContainer'>
            <Card>
              <CardBody>
                <img src={HTML2}/>
              </CardBody>
              <CardFooter>
                <p>HTML 5</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={CSS3}/>
              </CardBody>
              <CardFooter>
                <p>CSS</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={JS}/>
              </CardBody>
              <CardFooter>
                <p>JavaScript</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={sass}/>
              </CardBody>
              <CardFooter>
                <p>SASS</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={bs}/>
              </CardBody>
              <CardFooter>
                <p>Bootstrap</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={chakra}/>
              </CardBody>
              <CardFooter>
                <p>ChakraUI</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={node}/>
              </CardBody>
              <CardFooter>
                <p>Node.js</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={npm}/>
              </CardBody>
              <CardFooter>
                <p>npm</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={django}/>
              </CardBody>
              <CardFooter>
                <p>Django</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={django}/>
              </CardBody>
              <CardFooter>
                <p>Django Rest<br/>Framework</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={jwt}/>
              </CardBody>
              <CardFooter>
                <p>JWT</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={mongodb}/>
              </CardBody>
              <CardFooter>
                <p>MongoDB</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={ex}/>
              </CardBody>
              <CardFooter>
                <p>Express</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={pg}/>
              </CardBody>
              <CardFooter>
                <p>PostgreSQL</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={insomnia}/>
              </CardBody>
              <CardFooter>
                <p>Insomnia</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={git}/>
              </CardBody>
              <CardFooter>
                <p>Git</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={gh}/>
              </CardBody>
              <CardFooter>
                <p>GitHub</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={trello}/>
              </CardBody>
              <CardFooter>
                <p>Trello</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={jira}/>
              </CardBody>
              <CardFooter>
                <p>JIRA</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={figma}/>
              </CardBody>
              <CardFooter>
                <p>Figma</p>
              </CardFooter>
            </Card>
            
          </SimpleGrid>
          </div>
          <div className='techSkills'>
            <div className='skillsTitle'>
              <p>CRM Skills</p>
            </div>
            <SimpleGrid minChildWidth='100px' spacing='10px' className='backgroundContainer'>
              <Card>
                <CardBody>
                  <img src={sfdc}/>
                </CardBody>
                <CardFooter>
                  <p>Salesforce</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={gainsight}/>
                </CardBody>
                <CardFooter>
                  <p>Gainsight<br></br> NXT</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={px}/>
                </CardBody>
                <CardFooter>
                  <p>Gainsight PX</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={hs}/>
                </CardBody>
                <CardFooter>
                  <p>Hubspot</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={ns}/>
                </CardBody>
                <CardFooter>
                  <p>Oracle Netsuite</p>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </div>
          <div className='softSkills'>
          <div className='skillsTitle'>
              <p>Other integrations</p>
            </div>
            <SimpleGrid minChildWidth='100px' spacing='10px' className='backgroundContainer'>
            <Card>
                <CardBody>
                  <img src={google}/>
                </CardBody>
                <CardFooter>
                  <p>Google Suite</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={vonage}/>
                </CardBody>
                <CardFooter>
                  <p>Vonage Contact Center</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={RC}/>
                </CardBody>
                <CardFooter>
                  <p>RingCentral</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={TR}/>
                </CardBody>
                <CardFooter>
                  <p>TaskRay</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={zapier}/>
                </CardBody>
                <CardFooter>
                  <p>Zapier iPaaS</p>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </div>
        </section>
    </>
  )}

export default Skills