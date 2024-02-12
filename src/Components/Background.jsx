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


function Background() {

  return (
    <>
      <section className='background' name='background'>
        <SimpleGrid minChildWidth='300px' spacing='40px' className='backgroundContainer'>
        <Card>
          <CardHeader>
            <Heading size='md' textTransform='uppercase'>Education</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' >
                  University
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs'>
                  International Study
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size='md'>Home</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Chichester
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Otto
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size='md'>Hobbies</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Watersports
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Music
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
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