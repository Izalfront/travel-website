// eslint-disable-next-line no-unused-vars
import React from 'react';

// import destination from assets ===>
import scotlandia from '../../assets/scotland.jpg';
import dubai from '../../assets/dubai.jpg';
import singapore from '../../assets/singapore.jpg';
import indonesia from '../../assets/indonesia.jpg';

// import user from assets ===>
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user5 from '../../assets/user5.jpg';
import user4 from '../../assets/user4.jpg';

// we are going to use high order array method called Map to display all the data ===>
const travelers = [
  {
    id: 1,
    destinationImage: scotlandia,
    travelerImage: user3,
    travelerName: 'Luna Tin',
    socialLink: '@lunatina',
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: user2,
    travelerName: 'John Smith',
    socialLink: '@JohnSmith',
  },
  {
    id: 3,
    destinationImage: indonesia,
    travelerImage: user5,
    travelerName: 'Aulia Selyna',
    socialLink: '@Auselyna',
  },
  {
    id: 4,
    destinationImage: singapore,
    travelerImage: user4,
    travelerName: 'Maya Rumi',
    socialLink: '@Mayarum',
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
            return (
              // {/* single passanger card */}
              <div key={id} className="singleTravel">
                <img src={destinationImage} className="destinationImage" alt="" />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} alt="" className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
