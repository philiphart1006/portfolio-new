// * Chakra Imports
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'

// * Image imports
import chi1 from '../assets/chi1.jpg'
import chi2 from '../assets/chi2.jpg'
import japan1 from '../assets/japan1.jpg'
import japan2 from '../assets/japan2.jpg'
import cam1 from '../assets/cam1.jpg'
import cam2 from '../assets/cam2.jpg'
import otto1 from '../assets/otto1.jpg'
import otto2 from '../assets/otto2.jpg'
import row1 from '../assets/parisrowing.jpeg'
import row2 from '../assets/row2.jpg'
import cathedral from '../assets/cathedral.jpg'
import sing2 from '../assets/sing2.jpg'


function Background() {

  return (
    <>
      <section className='background' name='background'>
        <SimpleGrid minChildWidth='220px' spacing='40px' className='backgroundContainer'>
        <Card className='backgroundCard'>
          <CardHeader>
            <Heading size='md' textTransform='uppercase'>Education</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' >
                  University
                </Heading>
                <div className='gallery'>
                  <img src={cam1} width={150}/>
                  <img src={cam2} width={150}/>
                </div>
                <Text pt='2' fontSize='sm'>
                  I studied Biological Natural Sciences at Fitzwilliam College, Cambridge University. Highlights included a Scholarship in first year and being elected President of the college student union in second year.
                </Text>
              </Box>
              <Box>
                <Heading size='xs'>
                  International Study
                </Heading>
                <div className='gallery'>
                  <img src={japan1} width={150}/>
                  <img src={japan2} width={150}/>
                </div>
                <Text pt='2' fontSize='sm'>
                  Following graduation, I spent a year in Fukuoka, Japan studying the language at the Japanese University of Economics while enjoying the cuisine, culture, and wide-ranging scenery on offer.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card className='backgroundCard'>
          <CardHeader>
            <Heading size='md'>HOME</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs'>
                  Chichester
                </Heading>
                <div className='gallery'>
                  <img src={chi1} width={150}/>
                  <img src={chi2} width={150}/>
                </div>
                <Text pt='2' fontSize='sm'>
                  Following 7 years in East London, I'm currently based 1.5 hours out of London in the cathedral city of Chichester, West Sussex where I can just as easily enjoy coastal walks as well as hikes in the South Downs.
                </Text>
              </Box>
              <Box>
                <Heading size='xs'>
                  Otto
                </Heading>
                <div className='gallery'>
                  <img src={otto1} width={150}/>
                  <img src={otto2} width={150}/>
                </div>
                <Text pt='2' fontSize='sm'>
                  Often accompanied by my 3 year-old Miniature Schnauzer, Otto. He's my number one canine companion and often joins me on my bike, paddleboard, or in office.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size='md'>HOBBIES</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs'>
                  Watersports
                </Heading>
                <div className='gallery'>
                  <img src={row1} width={150}/>
                  <img src={row2} width={150}/>
                </div>
                <Text pt='2' fontSize='sm'>
                  I'm happiest when on, in, or near the water. Particular highlights have been my rowing career with London Otters Rowing Club, a new excursion into Celtic Longboat rowing with Chichester Yacht Club, and a voluntary dip in the London Docks for London Triathlon 2023.
                </Text>
              </Box>
              <Box>
                <Heading size='xs'>
                  Choral Music
                </Heading>
                <div className='gallery'>
                  <img src={cathedral} width={150}/>
                  <img src={sing2} width={150}/>
                </div>
                <Text pt='2' fontSize='sm'>
                  Having had the opportunity to travel globally on choir tours at school & university, I continue to enjoy choral music at the local cathedral evensong services as well as when visiting new cities.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        </SimpleGrid>
        </section>
    </>
  )}

export default Background