import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, about } from '../../portfolio'
import './Navbar.scss'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const { resume } = about

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul style={{ display: showNavList ? 'flex' : null }} className='nav-list'>
        {skills.length ? (
          <li className='nav-list-item'>
            <a href='#skills' onClick={toggleNavList} className='link link-nav'>
              <span className='list-number'>01. </span>Skills
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav-list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link-nav'
            >
              <span className='list-number'>02. </span>Projects
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav-list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link-nav'
            >
              <span className='list-number'>03. </span>Contact
            </a>
          </li>
        ) : null}

        {resume && (
          <li className='nav-list-item'>
            <a
              href='https://drive.google.com/file/d/194LlK9IEy6Ar67vxsF4HvjxYE0fzRbRa/view?usp=drive_link'
              target='_blank'
              title='Resume'
              rel='noreferrer'
              onClick={toggleNavList}
              className='link link-nav'
            >
              <span className='list-number'>04. </span>Resume
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn-icon nav-theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn-icon nav-hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
