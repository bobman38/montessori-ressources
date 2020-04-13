import React from 'react';

// TODO remove this import and switch to use react-bulma-components.
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Tag from 'react-bulma-components/lib/components/tag';
import './Card.css';

const Card = props => {
  const cardPreviewImages = props.cards.map((card, index) => {
    return (
      <img
        className="image-preview"
        key={index.toString()}
        src={card.image.url}
        alt={card.alt}
      />
    );
  });

  return (
    <div className="thumbnails">
      <div className="image-previews-container">{cardPreviewImages}</div>
      <Tag rounded size="large" className="nomenclature-image-count">
        {props.imageCount}
      </Tag>
      <div className="thumbnail">
        <img src={props.mainImage.url} alt={props.alt} />
      </div>
    </div>
  );
};

export default Card;
