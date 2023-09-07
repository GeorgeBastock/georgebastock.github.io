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
  resume:
    'https://drive.google.com/file/d/194LlK9IEy6Ar67vxsF4HvjxYE0fzRbRa/view?pli=1',
  social: {
    linkedin: 'https://www.linkedin.com/in/george-bastock',
    github: 'https://github.com/georgebastock',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mind Norfolk & Waveney',
    description: 'This is a test description for testing purposes...',
    stack: [
      'HTML',
      'SASS',
      'JavaScript',
      'Umbraco',
      '.NET',
      'MySQL',
      'Git',
      'MVC',
    ],
    sourceCode: '',
    livePreview: 'https://www.norfolkandwaveneymind.org.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/J5NRreT.png'
        alt='Mind Norfolk & Waveney Front Page'
      />
    ),
  },
  {
    name: 'Garden Care',
    description: 'This is a test description for testing purposes...',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: '',
    livePreview: 'https://garden-care.org.uk/',
    screenshot: (
      <img src='https://i.imgur.com/iNKRV5V.png' alt='Garden Care Front Page' />
    ),
  },
  {
    name: '101 Computers',
    description: 'This is a test description for testing purposes...',
    stack: ['HTML', 'SASS', 'JavaScript', 'Umbraco', '.NET'],
    sourceCode: '',
    livePreview: 'https://101computers.co.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/yZqUTnG.png'
        alt='101 Computers Front Page'
      />
    ),
  },
  {
    name: 'Saint Francis Xavier Sixth Form',
    description: 'This is a test description for testing purposes...',
    stack: ['HTML', 'CSS', 'JavaScript', 'Kentico', '.NET', 'MySQL'],
    sourceCode: '',
    livePreview: 'https://www.sfx.ac.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/Sb4yMVY.png'
        alt='Saint Francis Front Page'
      />
    ),
  },
  {
    name: 'House Exchange',
    description: 'This is a test description for testing purposes...',
    stack: ['HTML', 'SASS', 'JavaScript', 'Umbraco', '.NET', 'MySQL', 'Git'],
    sourceCode: '',
    livePreview: 'https://www.houseexchange.org.uk/',
    screenshot: (
      <img
        src='https://i.imgur.com/tJuWc1q.png'
        alt='House Exchange Front Page'
      />
    ),
  },
  {
    name: 'Superior Freight',
    description: 'This is a test description for testing purposes...',
    stack: ['HTML', 'SASS', 'JavaScript', 'Umbraco', '.NET', 'MySQL', 'Git'],
    sourceCode: '',
    livePreview: 'https://supuk.com/',
    screenshot: (
      <img
        src='https://i.imgur.com/xmnCqWT.png'
        alt='Superior Freight Front Page'
      />
    ),
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
