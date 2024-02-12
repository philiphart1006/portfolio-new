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
import CSS from '../assets/css.png'
import GS from '../assets/Gainsight.jpg'


function Skills() {

  return (
    <>
      <section className='skills' name='skills'>
          <div className='codingSkills'>
          <SimpleGrid minChildWidth='100px' spacing='10px' className='backgroundContainer'>
            <Card>
              <CardBody>
                <img src={HTML}/>
              </CardBody>
              <CardFooter>
                <p>HTML 5</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={CSS}/>
              </CardBody>
              <CardFooter>
                <p>CSS</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>JavaScript</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>SASS</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Bootstrap</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>ChakraUI</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Node.js</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>npm</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Django</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Django Rest<br/>Framework</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>JWT</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>MongoDB</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Express</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>PostgreSQL</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Insomnia</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Git</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>GitHub</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Trello</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>JIRA</p>
              </CardFooter>
            </Card>
            <Card>
              <CardBody>
                <img src={PHLogo}/>
              </CardBody>
              <CardFooter>
                <p>Figma</p>
              </CardFooter>
            </Card>
            
          </SimpleGrid>
          </div>
          <div className='techSkills'>
            <SimpleGrid minChildWidth='100px' spacing='10px' className='backgroundContainer'>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>Salesforce</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={GS}/>
                </CardBody>
                <CardFooter>
                  <p>Gainsight<br></br> NXT</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>Gainsight PX</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>Hubspot</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>Oracle Netsuite</p>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </div>
          <div className='softSkills'>
            <SimpleGrid minChildWidth='100px' spacing='10px' className='backgroundContainer'>
            <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>Google Suite</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>Vonage Contact Center</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>RingCentral</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
                </CardBody>
                <CardFooter>
                  <p>TaskRay</p>
                </CardFooter>
              </Card>
              <Card>
                <CardBody>
                  <img src={PHLogo}/>
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