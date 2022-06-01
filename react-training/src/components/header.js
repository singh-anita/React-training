import React from 'react'
import {
  Container
} from 'react-bootstrap'
const Header = () => {
 return (
    <header className='d-flex align-items-center'>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       <Container>
          <ul class="mr-auto mt-lg-0">
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
          </ul>
      </Container>
    </header>
  )
}
export default Header