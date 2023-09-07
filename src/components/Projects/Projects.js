import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.scss'

const Projects = () => {
  if (!projects.length) return null
  return (
    <section id='projects' className='section projects'>
      <h2 className='section-title'>Projects</h2>
      {projects.map((project) => (
        <ProjectContainer key={uniqid()} project={project} />
      ))}
    </section>
  )
}

export default Projects
