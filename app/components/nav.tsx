import Link from 'next/link'
import { FaHome, FaBlog, FaLinkedin, FaGithub } from 'react-icons/fa'
// add icons to the nav items
const navItems = {
  '/': {
    name: 'Home',
    icon: <FaHome />,
  },
  '/blog': {
    name: 'blog',
    icon: <FaBlog />,
  },
  'https://www.linkedin.com/in/nathanlechamo': {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  'https://github.com/nathan-g1': {
    icon: <FaGithub />,
    name: 'GitHub',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle items-center relative py-1 px-2 m-1"
                >
                  <span className="mr-2 flex-shrink-0">
                  {icon}
                  </span>
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
