import React, { useEffect, useState } from 'react'
import './main-layout.css'
import Sidenavbar from '../components/sidenavbar/Sidenavbar'
import { Outlet } from 'react-router-dom'
import { MobileSidebar } from '../components/sidenavbar/MobileSidebar';


function MainLayout({children}) {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(prev => window.innerWidth);
      console.log('Now width is', window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const isMobile = windowSize <= 768; // You can adjust this threshold based on your design


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
          
          { window.innerWidth ? <Sidenavbar navData={navData}/> 
          : <MobileSidebar/>
          }


        </div>
        <div className="col-lg-10 px-0">
        {children}
        </div>
      </div>
    
    </div>
  )
}

export default MainLayout