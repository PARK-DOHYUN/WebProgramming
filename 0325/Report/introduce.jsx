import React from "react";
import Infomation from "./Infomation";

const content = {
  myImage:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  alt: "image",
  myName: "박도현",
  introduce: "경성대학교 소프웨어학과",
  goals: "네이버에서 일하는 것을 목표로 노력하고 있습니다.",
  email: "qeg0205@gmail.com",
  github: "https://github.com/PARK-DOHYUN/WebProgramming",
};

const mainStyles = {
  mainContainer: {
    background: "skyblue",
  },
};

function Introduce(props) {
  return (
    <div style={mainStyles.mainContainer}>
      <Infomation
        src={content.myImage}
        alt={content.alt}
        name={content.myName}
        introduce={content.introduce}
        goals={content.goals}
        email={content.email}
        github={content.github}
      />
    </div>
  );
}
export default Introduce;
