import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status);
  
  const navigate = useNavigate();

  const navItems =[
    {
      name:'Home',
      slug: '/',
      active: true
    },
    {
      name:'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name:'SignUp',
      slug: '/signup',
      active: !authStatus
    },
    {
      name:'All Post',
      slug: '/allposts',
      active: !authStatus
    },
    {
      name:'Add Post',
      slug: '/addpost',
      active: !authStatus
    },
  ]
  

  return (
    <div className='py-4 bg-gray-500 '
    >
      <nav className='flex' >
        <div className="mr-4">
          <Link to='/' >
          <h1>this is Logo</h1>
          </Link>
        </div>
        <ul className='flex ml-auto' >
          {navItems.map((item)=>(
            item.active ? <li key={item.name} >
            <button
              onClick={()=> navigate( item.slug )}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            > {item.name} </button>
            </li> : null
          ))}

          {authStatus && (
            <li className='inline-block py-4 rounded-full duration-200 hover:bg-blue-100'
            > Logout </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header