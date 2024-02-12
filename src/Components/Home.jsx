// * Chakra Imports
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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
      <section className='about'>
        <Tabs isFitted  variant='enclosed'>
          <TabList mb='1em'>
            <Tab>PAST</Tab>
            <Tab>PRESENT</Tab>
            <Tab>FUTURE</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>An established career as a business systems and operations specialist with experience in CRM solutions, click-to-code configuration/integration, and tech based approaches to business process optimisation.</p>
              <p>Having worked in a range of roles and tech companies - from establishing operations functions within start-ups and scale-up to managing a business systems team in a US corporate, I've always enjoyed collaborating closely with our software engineering teams. </p>
            </TabPanel>
            <TabPanel>
              <p>I'm now looking to make the sideways move into software development complementing the technical, managerial, and organisational skills I've developed to date with my newly developing software engineering skill-set.</p>
              <p>In everything I do and the companies I am proud to have been a part of, I value working with passion; producing the highest quality products & customer experiences; and interacting with authenticity & respect on a human-first business basis.</p>
            </TabPanel>
            <TabPanel>
              <p>I’m aspiring to hone my engineering skillset within industry, alongside absorbing and helping develop world-leading industry best practice when it comes to product team operating systems.</p>
              <p>In time, I would like not only to have contributed to building some of the most innovative & effective products in their fields but also help establish, grow, and lead product teams in impactful companies.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </>
  )}

export default Home