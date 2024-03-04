import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Noida India",
      openPositions: 10,
      icon: <FaMicrosoft />,
      url: "https://careers.microsoft.com/v2/global/en/home.html"
    },
    {
      id: 2,
      title: "Tesla",
      location: "Noida India",
      openPositions: 5,
      icon: <SiTesla />,
      url: "https://www.tesla.com/careers"
    },
    {
      id: 3,
      title: "Apple",
      location: "Noida India",
      openPositions: 20,
      icon: <FaApple />,
      url: "https://www.apple.com/jobs/us/"
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon"> 
                    <a href={element.url} target="_blank" rel="noopener noreferrer">
                      {element.icon}
                    </a>
                  </div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
