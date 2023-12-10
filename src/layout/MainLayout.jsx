import React from 'react'
import './main-layout.css'
import Sidenavbar from '../components/sidenavbar/Sidenavbar'
import { Outlet } from 'react-router-dom'


function MainLayout({children}) {

    const navData = [
        {
            title: 'Dashboard',
            section: 'Dashboard',
            icon: 'GridView',
            link: '/'
        },
        {
            title: 'Assessment',
            section: 'Assessment',
            icon: 'EditNote',
            link: '/Assessment'
        },
        {
            title: 'My Library',
            section: 'My Library',
            icon: 'LibraryBooks',
            link: '/MyLibrary'
        }
    ]
    
  return (
   
    <div className='container-fluid main-layout'>
      <div className="row">
        <div className="col-lg-2 sidebar-div">
        <Sidenavbar navData={navData}/>
        </div>
        <div className="col-lg-10">
        {children}
        </div>
      </div>
    
    </div>
  )
}

export default MainLayout