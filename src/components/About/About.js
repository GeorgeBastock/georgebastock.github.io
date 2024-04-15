import $ from 'jquery'
import { useEffect } from 'react'
import Typed from 'react-typed'
import { about } from '../../portfolio'
import './About.scss'

const About = () => {
  const { name, role, resume } = about

  useEffect(() => {
    $('.about-name').html(
      $('.about-name')
        .text()
        .split('')
        .map((a) => `<span class="letter">${a}</span>`)
    )
  }, [])

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hey. I&apos;m <span className='about-name'>{name}.</span>
        </h1>
      )}
      {/* <div className='line-break' /> */}
      {role && <h2 className='about-role'>&#10240;// A {role}.</h2>}
      <Typed
        strings={[
          "// I <i class='fas fa-heart'></i> Being A Front End Developer.",
          "// I <i class='fas fa-heart'></i> Being A Website Designer.",
          "// I <i class='fas fa-heart'></i> Being A Crazy Cat Guy.",
          "// I <i class='fas fa-heart'></i> Being A PC Wizard.",
        ]}
        typeSpeed={80}
        backSpeed={50}
        contentType='html'
        shuffle
        loop
        backDelay={2000}
        startDelay={1600}
        className='about-typed'
      />
      <div className='about-contact center'>
        <a href='#contact'>
          <span type='button' className='btn btn-outline'>
            Get In Touch
          </span>
        </a>
        {resume && (
          <a
            href='https://drive.google.com/file/d/1aD89iV7_m88ciFaC1EgcWLanxTzi6HHN/view?usp=sharing'
            target='_blank'
            title='Resume'
            rel='noreferrer'
          >
            <span type='button' className='btn btn-outline'>
              Resume
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
