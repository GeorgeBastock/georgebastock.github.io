import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  let themePreference = localStorage.getItem('themePreference')
  if (!themePreference) {
    themePreference = 'light'
  }

  const [themeName, setThemeName] = useState(themePreference)

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themePreference', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
