import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.scss'

const Skills = () => {
  if (!skills.length) return null
  return (
    <section className='section skills' id='skills'>
      <h2 className='section-title'>Tech Stack</h2>
      <div className='skills-list'>
        {skills.map((skill) => (
          <div key={uniqid()} className='skills-list-item'>
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
