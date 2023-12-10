import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkIcon from "@mui/icons-material/Link";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import "./Item-card.css";
import "./../../assets/mediaqueries.css";

export default function ItemCard() {
  return (
        <div className='item_card'>
          <div className='card_top'>
            <span>
              <CameraAltIcon/>
            </span>
            <a href=''>
              <MoreVertIcon />
            </a>
          </div>
          <div className='card_between'>
            <h3>Math Assessment</h3>
            <div className="d-flex">
            <p>job</p>
            <span>
                <CalendarMonthIcon />
              </span>
              <h5>20 apr 2023</h5>
            </div>
           
          </div>
          <div className='card_footer'>
            <div className='card_footer_left'>
              <div>
                <h3>00</h3>
                <h4>Duration</h4>
              </div>
              <div className='duration'>
                <h3>00</h3>
                <h4>Duration</h4>
              </div>
            </div>
            <div className='card_footer_right'>
              <button>
                <LinkIcon />
                Share
              </button>
              <span>LP</span>
            </div>
          </div>
        </div>
     
  );
}
