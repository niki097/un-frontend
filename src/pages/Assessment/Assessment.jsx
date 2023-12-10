import React from "react";
import "./Assessment.css";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ItemCard from "../../components/assessment-Item-card/ItemCard";
import LinkIcon from '@mui/icons-material/Link';
import PublicIcon from '@mui/icons-material/Public';
import NewAssessment from "../../components/new-assessment/NewAssessment";

export default function Assessment() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <h1 className='asses-overview-heading'>Assessment Overview</h1>
          <div className='d-flex'>
            <div className='assess-overview-box'>
              <div className='assess-overview-total'>
                <p>Total assessment</p>
                <div className='assess-overview-left'>
                  <span>
                    <ViewStreamIcon />
                  </span>
                  <h5>34</h5>
                </div>
              </div>
            </div>
            <div className='assess-candidates'>
              <h4>Candidates</h4>
              <div className='assess-candidates-inner-div'>
                <div className='assess-candidates-inner'>
                  <span className="assess-candidates-inner-span">
                    <PermContactCalendarIcon />
                  </span>
                  <div className="px-3">
                    <h5>11,145
                      <span className='assess-overview-mid-span'>+89</span>
                    </h5>
                    <p>Total Attemped</p>
                  </div>
                </div>
                <div className="assess-attemped">
                  <h5>
                    11,145 <span className='assess-overview-mid-span'>+89</span>
                  </h5>
                  <p>E-mail</p>
                </div>
              </div>
            </div>
            <div className='assess-candidates'>
              <h4>Candidates Source</h4>
              <div className='assess-candidates-inner-div'>
                <div className='assess-candidates-inner'>
                  <span className="assess-candidates-source">
                    <PublicIcon/>
                  </span>
                  <div className="px-3">
                    <h5>11,145
                      <span className='assess-overview-mid-span'>+89</span>
                    </h5>
                    <p>Social Share</p>
                  </div>
                </div>
                <div className="assess-attemped px-3">
                  <h5>
                    11,145 <span className='assess-overview-mid-span'>+89</span>
                  </h5>
                  <p>Social Share</p>
                </div>
                <div className="assess-attemped px-3">
                  <h5>
                    11,145 <span className='assess-overview-mid-span'>+89</span>
                  </h5>
                  <p>Unique Link</p>
                </div>
              </div>
            </div>
            <div className='total-purpose'>
              <div className='assess-overview-total'>
                <p>Total Purpose</p>
                <div className='assess-overview-left'>
                  <span>
                    <LinkIcon />
                  </span>
                  <h5>11</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 my-4'>
          <NewAssessment/>
        </div>
        <div className='col-lg-4 my-4'>
          <ItemCard />
        </div>
      </div>
    </div>
  );
}
