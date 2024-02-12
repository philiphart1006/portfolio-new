// ! Imports
import { Outlet, useNavigation } from 'react-router-dom'

// Component imports
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

// Styling imports
import { Spinner } from '@chakra-ui/spinner'

function App() {
  
  // Constants
const navigation = useNavigation()

  return (
    <>
      <Header />
      <main>
        {
          navigation.state === 'idle'
          ?
          <Outlet />
          :
          <Spinner animation='border' />
        }
      </main>
      <Footer />
    </>
  )
}

export default App
