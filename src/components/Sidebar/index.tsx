import Cookies from 'js-cookie'
import React from 'react'
import SidebarItem from './SidebarItem'
import { useNavigate } from 'react-router-dom'
interface SidebarProps {
  activeMenu?:
    | '/topics'
    | '/testimonials'
    | '/languages'
    | '/projects'
    | '/users'
}

function Sidebar({ activeMenu }: SidebarProps) {
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove('auth')
    navigate('/basic-auth')
  }
  return (
    <aside
      className='w-64 h-screen sticky top-0 left-0 z-10'
      aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 px-3 h-screen bg-gray-50 rounded'>
        <ul className='space-y-2'>
          <SidebarItem
            activeMenu={activeMenu === '/topics'}
            link='/control/topics'
            title={'Topics'}
          />
          <SidebarItem
            activeMenu={activeMenu === '/testimonials'}
            link='/control/testimonials'
            title={'Testimonials'}
          />
          <SidebarItem
            activeMenu={activeMenu === '/languages'}
            link='/control/languages'
            title={'Languages'}
          />
          <SidebarItem
            activeMenu={activeMenu === '/projects'}
            link='/control/projects'
            title={'Projects'}
          />
          <SidebarItem
            activeMenu={activeMenu === '/users'}
            link='/control/users'
            title={'Users'}
          />
        </ul>
        <button
          onClick={handleLogout}
          className='px-3 py-1 bg-red-500 hover:bg-red-400 block mx-auto w-full mt-2 font-bold text-white shadow rounded'>
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
