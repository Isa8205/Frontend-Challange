import React, { useState } from "react";
import {
  ArrowRightCircle,
  ArrowLeftCircle,
  CheckCircleIcon,
} from "lucide-react";
import myImage from "../assets/images/eye.jpeg";

function ProfileCard() {
  let languages = [
    "React",
    "Java",
    "Python",
    "C",
    "C++",
    "C#",
    "Django",
    "Pearl",
    "Javascript",
  ];
  let profession = "Web Developer";
  let country = "Kenya";

  let profileStyles: React.CSSProperties = {
    height: "10em",
    width: "10em",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <>
      <div className="card rounded p-2">
        <div className="profile">
          <img src={myImage} alt="Isaiah Kibet" style={profileStyles} />
        </div>
        <h4 className="name">
          ISAIAH KIBET <CheckCircleIcon fill="green" stroke="white" />
        </h4>
        <p className="profession">
          {profession}, {country}
        </p>
        <div className="skills">
          <h4>SKILLS</h4>
          <span>
            {languages.map((item, index) => {
              return (
                <button className="btn btn-sm btn-success m-1" key={item}>
                  {item}
                </button>
              );
            })}
          </span>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
