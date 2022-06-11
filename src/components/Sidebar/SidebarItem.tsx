import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
interface SidebarItemProps {
  title: 'Topics' | 'Testimonials' | 'Languages' | 'Projects' | 'Users'
  link:
    | '/control/topics'
    | '/control/testimonials'
    | '/control/languages'
    | '/control/projects'
    | '/control/users'
  activeMenu?: Boolean
}
function SidebarItem({ title, link, activeMenu }: SidebarItemProps) {
  return (
    <li>
      <Link
        to={link}
        className={`flex items-center p-2 font-semibold text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ${
          activeMenu ? 'ring-2 ring-blue-500' : ''
        }`}>
        <AiFillCaretRight className={`${activeMenu ? 'text-blue-600' : ''}`} />
        <span
          className={`ml-3 ${activeMenu ? 'text-blue-600' : ''}
        `}>
          {title}
        </span>
      </Link>
    </li>
  )
}

export default SidebarItem
