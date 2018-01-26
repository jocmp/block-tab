import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';

const Description = ({ description, media }) => (
  <div>
    <div dangerouslySetInnerHTML={ { __html: description } } />
    { !!media &&
      <ImageZoom
        image={ {
          src: media,
          className: 'img',
          style: { width: '20em' }
        } }
      />
    }
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
  media: PropTypes.string
};

export default Description;
