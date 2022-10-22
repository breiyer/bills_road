import React from 'react'
import PropTypes from "prop-types";
import "../css/components/CardComponent.css"


function Cards({ imageSource, ciudad, departamento, text }) {
  return (
    <div className="XCard text-center animate__animated animate__fadeInUp">
      <div className="XCard-header">
        <h4 className="XCard-title">{`${ciudad} (${departamento})`}</h4>
        <img src={imageSource} alt="a wallpaper" className="XCardIcon" />
      </div>

      <div className="XCard-body">
        <p className="XCard-text">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
      </div>
    </div>
  );
}

Cards.propTypes = {
  ciudad: PropTypes.string.isRequired,
  departamento: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string
};

export default Cards;
