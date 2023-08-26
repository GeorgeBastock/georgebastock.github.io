const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://georgebastock.github.io/',
  title: 'GB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'George Bastock',
  role: 'Full Stack Developer',
  description: 'test test test test',
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
    description: 'test test test test',
    stack: ['test', 'test', 'test'],
    sourceCode: 'https://test.com',
    livePreview: 'https://test.com',
  },
  {
    name: 'Project 2',
    description: 'test test test test',
    stack: ['test', 'test', 'test'],
    sourceCode: 'https://test.com',
    livePreview: 'https://test.com',
  },
  {
    name: 'Project 3',
    description: 'test test test test',
    stack: ['test', 'test', 'test'],
    sourceCode: 'https://test.com',
    livePreview: 'https://test.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gbastock@outlook.com',
}

export { header, about, projects, skills, contact }
