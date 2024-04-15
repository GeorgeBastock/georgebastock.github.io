import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
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
              href='https://drive.google.com/file/d/1aD89iV7_m88ciFaC1EgcWLanxTzi6HHN/view?usp=sharing'
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
    </nav>
  )
}

export default Navbar
