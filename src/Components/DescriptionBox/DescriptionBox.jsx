import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          ratione fuga! Voluptas aperiam facilis modi consequatur ad nihil illo
          soluta vitae asperiores hic molestias vel, provident non ipsa quo
          pariatur!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa, ratione fuga! Voluptas aperiam facilis modi consequatur ad nihil
          illo soluta vitae asperiores hic molestias vel, provident non ipsa quo
          pariatur!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eaque
          distinctio provident, culpa, veniam pariatur, iste quo sequi eos
          cupiditate impedit in earum iusto explicabo a hic suscipit
          necessitatibus autem doloribus quibusdam natus incidunt ad.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
