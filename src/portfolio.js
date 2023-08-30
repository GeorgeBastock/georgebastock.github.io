const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://georgebastock.github.io/',
  invertedTitle: ' { George ',
  title: 'Bastock }',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'George Bastock',
  role: 'Full Stack Web Dev',
  resume: 'https://test.com',
  social: {
    linkedin: 'https://test.com',
    github: 'https://test.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description: 'test',
    stack: ['test'],
    sourceCode: 'https://test.com',
    livePreview: 'https://test.com',
  },
  {
    name: 'Project 2',
    description: 'test',
    stack: ['test'],
    sourceCode: 'https://test.com',
    livePreview: 'https://test.com',
  },
  {
    name: 'Project 3',
    description: 'test',
    stack: ['test'],
    sourceCode: 'https://test.com',
    livePreview: 'https://test.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'HTML',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        alt='HTML'
      />
    ),
    icon: <i className='devicon-html5-plain colored' />,
  },
  {
    name: 'CSS',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        alt='CSS'
      />
    ),
    icon: <i className='devicon-css3-plain colored' />,
  },
  {
    name: 'SASS/SCSS',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
        alt='SASS/SCSS'
      />
    ),
    icon: <i className='devicon-sass-original colored' />,
  },
  {
    name: 'JavaScript',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        alt='JavaScript'
      />
    ),
    icon: <i className='devicon-javascript-plain colored' />,
  },
  {
    name: 'React.js',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        alt='React.js'
      />
    ),
    icon: <i className='devicon-react-original colored' />,
  },
  {
    name: 'Git',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        alt='Git'
      />
    ),
    icon: <i className='devicon-git-plain colored' />,
  },
  {
    name: 'Umbraco',
    img: '',
    icon: <i className='devicon-csharp-plain colored' />,
  },
  {
    name: 'ASP.NET',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
        alt='ASP.NET'
      />
    ),
    icon: <i className='devicon-dot-net-plain colored' />,
  },
  {
    name: 'SQL',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
        alt='SQL'
      />
    ),
    icon: <i className='devicon-microsoftsqlserver-plain colored' />,
  },
  {
    name: 'Node.js',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        alt='Node.js'
      />
    ),
    icon: <i className='devicon-nodejs-plain colored' />,
  },
  {
    name: 'Azure',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
        alt='SQL'
      />
    ),
    icon: <i className='devicon-azure-plain colored' />,
  },
  {
    name: 'C#',
    img: (
      <img
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
        alt='C#'
      />
    ),
    icon: <i className='devicon-csharp-plain colored' />,
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gbastock@outlook.com',
}

export { header, about, projects, skills, contact }
