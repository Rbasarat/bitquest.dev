interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Backtester V2',
    description: `Project Backtester v2 is all about building a smarter, 
    faster and most important more reliable way to backtest trading algorithms.
    Read about common pitfalls and what to take into account when building a backtester`,
    imgSrc: '/static/images/backtester-v2/project-header.jpg',
    href: '/blog/backtester-v2/1-project-and-scope',
  },
]

export default projectsData
