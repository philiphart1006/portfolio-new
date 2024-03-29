// * React imports
import { Link } from 'react-router-dom'

// * Chakra Imports
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

// * Image imports
import PHLogo from '../assets/PHLogo.png'


function Header() {

  return (
    <>
      <header>
        <Link to='/'><img className='personalLogo' src={PHLogo}/></Link>
        <nav className='mainMenu wideMode'>
          <Link to='/skills'>SKILLS</Link>
          <Link to='/projects'>PROJECTS</Link>
          <Link to='/background'>BACKGROUND</Link>
        </nav>
        <div className='narrowMode'>
        <Menu className='narrowMenu'>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                {isOpen ? 'CLOSE' : 'MENU'}
              </MenuButton>
              <MenuList>
                <MenuItem><Link className='menuLink' to='/skills'>SKILLS</Link></MenuItem>
                <MenuItem><Link className='menuLink'  to='/projects'>PROJECTS</Link></MenuItem>
                <MenuItem><Link className='menuLink'  to='/background'>BACKGROUND</Link></MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        </div>
      </header>
    </>
  )}

  export default Header