import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import img1 from "./img/1.jpg";
import img2 from "./img/3.jpg";
import img3 from "./img/2.jpg";
import img4 from "./img/4.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story title={"hello"} image={img1} profileSrc={img4} />
      <Story title={"hello"} image={img2} profileSrc={img3} />
      <Story title={"hello"} image={img3} profileSrc={img2} />
      <Story title={"hello"} image={img4} profileSrc={img1} />
    </div>
  );
}

export default StoryReel;
