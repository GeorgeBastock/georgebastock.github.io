import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

const Header = () => {
  const { homepage, invertedTitle, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='brand'>
            <span className='inverted'>{invertedTitle}</span>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
