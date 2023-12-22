import React from 'react';
// import icon ===>
import { RxCalendar } from 'react-icons/rx';
import { BsShieldCheck } from 'react-icons/bs';
import { CiBookmarkCheck } from 'react-icons/ci';
const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">View All</button>
        </div>

        <div className="cardDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="caradTitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket !</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="caradTitle ">Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket !</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <CiBookmarkCheck className="icon" />
            </div>
            <span className="caradTitle ">Save More</span>
            <p>You can also call airlines from your phone and book a flight ticket !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
