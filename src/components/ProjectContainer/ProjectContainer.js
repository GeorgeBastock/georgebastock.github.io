import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.scss'

const ProjectContainer = ({ project }) => (
  <div className='project-container'>
    {project.screenshot}
    <div className='project-content'>
      <h3>{project.name}</h3>
      <p className='project-description'>{project.description}</p>

      {project.stack && (
        <ul className='project-skill'>
          {project.stack.map((item) => (
            <li key={uniqid()}>{item}</li>
          ))}
        </ul>
      )}

      <ul className='project-link'>
        {project.sourceCode && (
          <li>
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link-icon'
              rel='noreferrer'
              target='_blank'
            >
              <GitHubIcon />
            </a>
          </li>
        )}

        {project.livePreview && (
          <li>
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link-icon'
              rel='noreferrer'
              target='_blank'
            >
              <LaunchIcon />
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>
)

export default ProjectContainer
