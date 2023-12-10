import React, { useState } from 'react';
import './Sidenavbar.css';
import { NavLink } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuIcon from '@mui/icons-material/Menu';
import "../../assets/mediaqueries.css"


export default function Sidenavbar({navData}) {
  const [showNav, setShowNav]=useState(false)

const toggleMenu = () => {
  setShowNav(!showNav)
}
  return (

      navData ? 
    <nav className="sidenavbar">
      <div class="menu-icon" onclick={toggleMenu}>
        <MenuIcon/>
      </div>
      <ul id="navList">
        { navData.length > 0 &&  navData.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link} className="navoptions">
              {item.icon === 'GridView' && <GridViewIcon />}
              {item.icon === 'EditNote' && <EditNoteIcon />}
              {item.icon === 'LibraryBooks' && <LibraryBooksIcon />}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav> : <></>
  );
}
