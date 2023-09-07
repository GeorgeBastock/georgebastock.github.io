import { about, contact } from '../../portfolio'
import './Social.scss'

const Social = () => {
  const { social } = about

  return (
    <>
      {social && (
        <div className='social-hud'>
          <ul className='social-list'>
            {social.linkedin && (
              <li className='outer-social'>
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  rel='noreferrer'
                  target='_blank'
                >
                  <i className='fab fa-linkedin-in' />
                </a>
                <div className='side-text'>Linkedin Profile.</div>
              </li>
            )}

            {social.github && (
              <li className='outer-social'>
                <a
                  href={social.github}
                  aria-label='github'
                  rel='noreferrer'
                  target='_blank'
                >
                  <i className='fab fa-github' />
                </a>
                <div className='side-text'>Github Profile.</div>
              </li>
            )}

            {contact.email ? (
              <li className='outer-social'>
                <a href='#contact'>
                  <i className='fas fa-envelope' />
                </a>
                <div className='side-text'>Contact Me.</div>
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </>
  )
}

export default Social
